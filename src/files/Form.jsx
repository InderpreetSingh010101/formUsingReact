

let Form = (props)=>{

    // let [name , setName] = useState("Name") ;
    // let [email , setEmail] = useState("email@e.com") ;
    // let [phone , setPhone] = useState("9898989898") ;


    return(
        <div class="form">
            <button class="themeBtn"onClick={()=>{
                if(props.theme === "light")
                   props.htheme("dark") ;
                else
                    props.htheme("light"); 
                

            }}>{props.theme}</button>

      <div className="all-input">

            <input type="text" placeholder="Name" value={props.name}
            onChange={(e)=>{
                props.hname(e.currentTarget.value)
            }
        } ></input>
            <input type="email" placeholder="Email" value={props.email} 
             onChange={(e)=>{
                 props.hemail(e.currentTarget.value)
                }
            }  ></input>
            <input type="Number" placeholder="Number" value={props.phone}  onChange={(e)=>{
                props.hphone(e.currentTarget.value)
            }
        }  ></input>
            {/* <button>Submit</button> */}
     </div>
        </div>
    )


}

export default Form ;