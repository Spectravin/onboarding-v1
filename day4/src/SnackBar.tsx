import React from 'react';
import { enqueueSnackbar, useSnackbar } from 'notistack';
import { useContext, useEffect } from 'react';
import {AuthContext} from './AuthProvider'

const SnackBar = () => {
    const auth=useContext(AuthContext);
     const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (auth?.isLoggedIn === undefined) return;
    if (auth.isLoggedIn) {
      enqueueSnackbar("Login Successful", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        }
      });
    } else {
      return;
    }
  }, [auth?.isLoggedIn]);

  return null;
}

export default SnackBar