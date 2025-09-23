import React, { useState } from 'react'

let formData={   
    name:"",
    description:"",
    img:""
 }
const FruitAddingForm = () => {
    const [formData, setFormData] = useState({   
        name:"",
        description:"",
        img:""
    });
    const [renderedFruits, setFruits] = useState(fruits);
    let lastFruitIndex = fruits.length-1;

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
            switch(event.target.id){
                case "fruitName": formData.name=event.target.value; 
                 break;
                case "description": formData.description = event.target.value;
                    break;
                case "img":formData.img=event.target.value;
                    break;
            }

        setFormData(formData);

    }
    const handleSubmit = () => {
         let d = { "name":formData.name, "description":formData.description, "img":formData.img}
        // let d = formData; // This was the issue line
        fruits.push(d); // This and below line. Both line needed to update the UI.
        setFruits([...renderedFruits, d]); // "setFruits(fruits)" not working. which I dont understand
        // Possible Reason. This setFruits rendering method have methods that handle adding this way only
    }
    const [showComponent, setShowComponent] = useState(false);
    const [currentIndex,setIndex] = useState(0);
    function handleClick(){
    if(currentIndex<lastFruitIndex){
        setIndex(currentIndex+1);
    }else{
        setIndex(0);
    }
  }
  return (
    <>  
        <h1>
            <button type="button" onClick={()=>setShowComponent(!showComponent)}>
                {showComponent? "Hide ": "Show "} Fruits
            </button>
        </h1>
        {showComponent && 
        <div>
            <button type="button" onClick={handleClick}>Next</button>
            <h2>{fruits[currentIndex]?.name}</h2>
            <p>{fruits[currentIndex]?.description}</p>
            <img src={fruits[currentIndex]?.img } alt="Image not available"/>
        </div>
    }
        <form>
            <h1>FruitAddingForm</h1>
            <label htmlFor='fruitName'>Fruit Name</label>
            <input id="fruitName" type="text"  onChange={handleChange} />
            <br></br>
            <label htmlFor='description'>Description</label>
            <input id="description" type="text"  onChange={handleChange} />
            <br/>
            <label htmlFor='img'>Image</label>
            <input id="img" type="text"  onChange={handleChange} />
            <br></br>
            <button type='button' onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default FruitAddingForm

export let fruits:fruit[]= [
    { 
        name:"apple",
        description:"This is a sweet tasting fruit. It can be available in Red, Green and White",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg"
    },
    {
        name:"orange",
        description:"This is a Citrus fruit. I has a sour taste",
        img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EADwQAAEDAgQDBQUFBgcAAAAAAAEAAgMEEQUSITEGQVETYXGBkQciMrHRI1JyocEUM0Lh8PEVFhckU2PS/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIDAQQFBgf/xAAzEQACAQMDAgMFCAIDAAAAAAAAAQIDESEEEjEFQVFh8BMiMnGBFEKRobHB0eFS8RUjM//aAAwDAQACEQMRAD8A9xQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAICpxfiPCsHDhW1bBKB+5Yczz5DbzVNXUU6S95kXJIydV7Srl37Dh4LeT55LfkB+q58+qW+GJB1PAi03tGri77SnpXtvqAHN/O5VX/ACdVPMUR9ozRYZx3hVZIIqhzqSQ85NWX/F9bLco9QpVMSwTVRPk1EcjJY2vjc17HC4c03BC3k01dFh0sgEAIAQAgBACAEAIAQAgBAcGRtnG4s3c30HisXB5xxbx49zpKHA3FrRdr6q2p/B9Vy9Rrvu0vxKpVOyPPXNfM9z3F0j3G5duXHmVzG+5XcUh7Xe+WttsHOAKja4vc6MoaCQG5tt0UQK7KcpicMzBc5nbpYF1gGP4vgsgkhLjTE3MJ1jd393ktmhWnR+Bkk2uD1Th3iOhx2DNTuyTNHvwu3Hh1C7Gn1MKyxz4FsZJl0tkkCAEAIAQAgImJYjR4XSuqq+ojghbu55t5Dqe4KMpKKuzEpKKuzD1vtOieXMwnD5JLG3a1JyNPgBc+tlpVNfGPwoo9vf4URKb2iYt2l6ikoXx/dYHMPqXH5LWXUp90iSqPua7COLMPxEsjkJpJ3bRzaB34XbFbtLW0p8uzLIyTLx0rA0uzt0BO62dyJHj3EWP1UmI17YZnxU0rjHK1p+KxOh9bW8iuJqK022ovkrrPsjNPlIuYQ2293an0WnjuUWGnEyi+d1+gdss8GbCtYHN1FisbgKKSoLA5sMhbycGGxCsUZNXsSsOU9NKJGiSNw6XadPHuWHdcoMvKDhHE8VlaaOn7KIgfbyAsZ68/JWUaNWrwseL4EU2bnAuBI8MLJpcTrHVI5xENaPUErp09DGGW8liprubCBrmMDHyOkI/icBc+NlvJNLJYhxZAIAQAgKXivH6fh3DH1cw7SV3uQQg6yvtoPDqVVVqKnHcyupNQVzyKrqcQxytFViMpmJIIYfgYOYaOX9XXHrVZTd2aqvN3kJ2TY35IxcA6aLQlMsLPCsGr8Rd/tKd8zL6u2YPMqVKhVq5hEmk2brAeD6ejb2mIuZUykfuwLRt8ufmuzp+nxgr1Mv8AItSsROM6ehwejpH0dMIp3TaOiJacoBJBsdbmw81LUUaVON4xSZam2m2GBcK4XieCx1OI0wfLUPdKx0b3NytJ90Nsdra+aUtLCdO81llbim8jn+nGBdtnvWW+522nyv8AmpfYaXmR2Isqfgzh6AgtwyJxH/IS75lWR0lGP3TOxFhDgmFwODocNo2OGzmwNB9bKxUaa4ijNkTg0AWAFuissZDI37o9EsgdDQLIBACAEAIAQCE2QHkHtHq34jxKYrBsdG3sW35l1iT+Y9Fx9dVvK3galX3p/IpYc0TGsaSB0XKcmzKVsF3w/wD4XTvdWYsS9kduyp2i5ld39w791bp3Ri99XtwvE3dLo6lfMVj8izxHjurkPZ4dFHSxN2sA51vPQeivq9SrS/8ANbUdml0yEfjyVb8YxSta5k9XUFjjqGyFvyWhU1dd8zZtQ09GDukh2GgfURMjnqql0UZ+zjLrht7X5c7BUy6jVhHb2Kq2mp1OcFqx9bDBHF+3T5IowyPK4ts0Cw26BVz6jqJSUlJr9CUKNFKyiiOytx+mdnjxKW3ISEPB9brZh1atF/EJaXTyw4l3QcZyMyx4pSEf9sP/AJ+hXUodai8VV9UadXpfenI1dFWQV0AnpZWyRO2cP60XZp1YVY7oO6OVOEqb2yVmSFYRBACAEAIAQAgBAIUB5Fx3TiHi6pcXE9oxj9Rawtb9FwOoK1ZlEl7xSBpzgbHqVoPgRi5SUVyxl0rp5QG/uxoFjbbJ6/T0lQpKC9MtKGgDxYtFutlrVKy4LXjJfU9IGAEix2Gi1XNyvcpb8CfGyNgFhsbjxVN83K22zpxbKbkWN+m31UnJSv6x+5hJxwht4zNI5O7lh444ZYubjb4myAl7RcdNFJSTM7nHgZiqKrC6jtqR5a4aOBGjx0IW5p9bV008MzOjTrxtM2+CYvDikALfcnb8cV9vqF63R62nqobo890cDU6aVCVnx2ZZrcNYEAIAQAgBACAEBgfad2MopGMt+1MJJsP4TyPmuP1OrT3Rh3Lfss6lKVVcI89xB5ieYb6gBru4fz3XMUTo9M0tv+6X0/kcw2HtZGjv1VNaVkdm3c1tJCGRXItpcA81zZq+WVOWbE62Y5RcAdSo4aK+MjjdL6XNt1Xa3a5F5Ohc2a62nQLN3hO3rx8TGFkURtb8RuLbgbKdklnJjc+xxNFYWa4OFtCFGWHZO5KEvEjvbnbtcu18SkUWJ2ZGhqJqGrZU07rPYb35EcwtrTaidCqpR7EqlONWG2Xc9GoKuOupI6mE+5ILi+47l7mjVjVgpx4Z5ipTlTm4S7EhWEAQAgBACAEAxWzspaSWok+GNpcVXVqKnBzlwidODqTUF3PLcWqJauZ9S43ke4uPd3BeKlVlVquc+WenjSjCHs7Y4MrNG987nPN3k6lbilaJdGKSSXCNBg1JZ4LrWtzGnmtWpK7IVJWRoqVovYt56AAXP0C1sdzVqMkxx+8XAjNscw08llxxcrcuwjmBuUA3NvHVa84pdyUZXHYo7Oa1w0J62WYwcWovu/l6RCU8YJMcRNwwt+6ANL7b+q2adLc7Qavx6f1sUymr5EMIdpZliDYAXym+ziVZGmnbCt+NvKTdvp3+g3+v4K17Q29nERuO/wBVp4WL49efJtxd15kGqYSSQOWoWXhl8XjJacF4gYK6TD5He5KC+O/Jw3A8R8l6Ho2oak6TeHwaHUqG6Cqrlcm3GwXoziCoAQAgBACAznG9SYsIETT700gHkNT+i5XV6myht8Wv5Oj0ympVrvsjCSXdHoLm+gXlVyehUc5Ib6dhkcQAbmwJ5DVXb3YI0FDARDljBzl1gST8JHruFhJyWO5pVJLddlnYiBjmZXRlotlZYl1v5FYmvduuGa6s5NPkdiBjic1rS241dl+IdBdZj7sLJWv3/wBkZWbuI+wJJyjXRUzXL4+XqxlM7j7OxsWAD0T3crHb+/WDDuTYAJAWkDXXU6WG428Ft6ePtE1Lv+FlyrdvLyNefuiODnAgyAB3vZWalzt9B/WystJr4uc2Xd+XFrWMJ27ECtZ7oN2AsOW4bpe1wVq6hPDvxj8r3+v9m3Rf5/yVtTleHloIu7QW2C1ZvLZt07qyZFgeaXEaepZe8UoPlfX8rrc0dVwqxkuzJ1I76Tg+6PThsLL3J5QVACAEAIAQGK9oMha+hZys8/JcHrTfuL5/sdrpEb738jIvk5eOvJcBI7iQsTruIfs4ePTX5LJXNYVi4ppA2Rm5DS25Y7Ug/pdFh+SNOabTfjcsXyNY8ujAsCHN94FuYjYAclZUdneJrxi2rSO2veyKxDiWm1xbQFRvJRsNsXLAyJrOtci4tcDktZuxZsxwdmYsdfS50JZs7oozck7/AEuu5FQTQ/HUTFxbfLfYnRWwq1d22L59fmVypwtceEgELnsaMx5ucbnfQc1s02tjkl9W/nj14kHH3rMjVMnakM10sADrtoNTy1Crqv2j224/bHPgWQW1XK2U2Djfc+q07G7HOBmWO7TmG2ylF7ZE4vJ6Jh0hlw+mkO74WOPmAvf6ee+jGXil+h5atHbUkvNklXFYIAQAgBAYj2jMOWil2tnHyK4nWIXUZfM7HSJ2comHbJZxObndcLaehsdxzEEG4JBuLKLRCSXBZQ1ILmgNbsALb6LDRquBMimtZ1wSPz77KHmVtXwSe2zAX1bbp9FGT8SO2wCQNAto63vXCqbsjO2/J22oIbZziW8xfdYVR2s3gOnm6O3TDQi4ym4cLde5SlKNrrsyCg72ORMDdznMvc2vzUo25Zlw8ELJPnYGA2FgBbSw7+qxUq7ko+v7MxpKMrkexOgJsq1e3kWq3IrY+QtupQTchJnoVI3JSwttazGi3kvoNKO2nFeR5eo7zbHVYQBACAEAIDMcf0pmwMStAJglDjccjp8yFodQp76N/A3un1Nlb5nlkjy07Fee2nq4u6EimOmqg4iSJ1O8HLc6DkFDaUSJcdSdgdOtt1VK/CIbSSyW+518FQ0HEe7W56KDVzCVjrtNrHVRsLHRmJde9vJZywojnaufq4l3eUbb5MKCXB003CiYtYdibc9VmCIyeCdh9MJquJmUi7hfwXT6dp/aVVjua2oqbYNm1Gy9oeeFQAgBACAEAxW07Kukmp5PglYWG/QiyjOKnFxfclGTjJSXY8PxamkpKmaCYESROLX+IXmKkHCbiz1mmrKcE0R42gODSHG9tRyuobDZcsDrSWuLb7KmSsYeSXE+9rlUSRCxLjeeqqaMWHWyBQaMWOu16BLCw41+xUbCw+x11FowSIxdQZBk2Bvu5nKynE15vNi+wCmzSmcj3WaDx/svVdK0+1bmczW1MbV3L8bLtHNBACAEAIAQCHVAYj2g8POqYXYpSNzSRM+3jA+Jo/iHePl4Lna7Tb1vjyjo6HVezeyXB5x272ZcoBsN1x7tHfhJSEjeSSTuVRJGzglxHZUSItExhN1UyDR3m11OnIKNhY6za7nySwsOsNwotGLEiI22UGjDROgBIusbblMmT6JstTKIIG5nHfu7z3Le0OnnVltijVrSjTTlI2lJA2nhbGzluep6r2dOmqcVFHAnNzluY8pkAQAgBACAQmyAQvA3KAbdMwb2QHm3GfCojkfiGDMDo3Eumpxu09WDmO7+y5Ws0d/fpnU0mst7kzFt3uFyJRaO7Tq3JsB2WvNF9ydHtqtdkWOAX2WMmDoNWAdt05LGTBIhsdSbDqsbWyEnYmQOfPI2ClF3ncnbxutqhpp1ZKMEa9Scacd9RmzwimpsPgytdnld8Tzz/kvWaXSw08NsefE89qNTKvK748CzEzTsQto1zoPBQHQKAVACA5OyAZkcUBCnlcOaArqiokG10BSYhXTsBylyAwmMzOdO6bs7PJu4t0zeK1a2kp1c8M2qOrqUscogQYnGHZX3Y4cnLlVun1I5SudWjr4Sw3ZlpDXRuAOYfNc6VBpm8qqZJZVMOxHqqnSJqaHf2lgHxD1WPZElK42+tijGaSVjGcy5wF1ZT00qjtFEalWEFeTsQpeJIyezpI3vI0zHRo+q6tDpL5qY8u5y6/UoRxBX/QsMKxKp0sLX6BdijRhRjtgrHIrVp1pbpu5rMPrp3AZrq0qLunqHkC90BYQyuNkBMjcbaoB0FAdIBLIDhzAUAw+mBQEWWgzckBAqMGbJe43QFRWcJsmv7oQFNU8AtkJIb+SAgu9nsjTdhc09xsoyhGXxK5KM5R+F2ODwHWDaWQeaq+zUf8UW/aa3+TD/ACFVu0dNJb8SytNRXEV+AeprP7zH4fZ+4fGC49TrZWpJYRS227sn0vArYjq1ZMFxS8LMitoNEBbU+Dtj2AQE6KhDUBJZThqAeayyA7AQCoAQAgBAJYIAsgEyjogEyt6IAyN6IAyN6IAyN6IBcreiATK3ogFsOiAWwQBYIBUAIAQAgP/Z"
    }
     
]

 export interface fruit{
    name:string,
    description:string,
    img:string
}