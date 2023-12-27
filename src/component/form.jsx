import Input from "./input";

export function Forma(){
    return(
        <div className="container">
          <form className="form">
            
            <Input 
                type="text"
                placeholder = "Username"
            />
            <Input 
                type="password"
                placeholder = "Password"
            />

            <button type="submit">Login</button>
          </form>
          </div>
    );
  }
export function Formb(){ 
  return(
        <div className="container">
          <form className="form">
            <Input 
                type="text"
                placeholder = "Username"
            />
            <Input 
                type="password"
                placeholder = "Password"
            />
            <Input 
            type ="password"
            placeholder="confirmpassword" 
            />

            <button type="submit">Register</button>
          </form>
        </div>
      );
}
 
