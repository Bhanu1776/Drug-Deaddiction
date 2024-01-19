import { Button, Input } from "@/components/ui"
import { useAppSelector } from "@/store/hooks";
import { addUser, requestFail} from "@/store/slices/userSlice";
import { RootState } from "@/store/store";
// import { useQuery } from "@tanstack/react-query"
import axios from 'axios';
// import { useAppDispatch } from "@/store/hooks";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"


const Signup = () => {
    // const {} = useSelector((state) => state.userSlice);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        username : "",
        email : "",
        password : ""
    });

    const {msg} = useAppSelector(
        (store: RootState) => store.userSlice
    )

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setUserData({
            ...userData,
            [name] : value
        })
    }

    const handleRegister = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const {username, email, password} = userData;

            const res = await axios.post("http://localhost:5000/api/user/register", {
                username ,
                email,
                password
            });

            const {data} = res;

            if(data.success){
                dispatch(addUser(data));
            }else{
                dispatch(requestFail(data));
            }

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

//     const { isLoading, error, data } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () =>
//     axios.post("http://localhost:5000/api/user/register", {
//         username : "Anshuman",
//         email : "osama@gmail.com",
//         password : "asdfghjkl"
//     }).then((res) => {
//         console.log(res.data);
//     }).catch((err) => {
//         console.log(err);
//     }),
    
//   })

//   const  = (data: any)=> {
//     // dispatch(data);
//     console.log("Bhanu gandu"+ data);
//   }

//   if (isLoading) return 'Loading...'

//   if (error) return 'An error has occurred: ' + error.message
    
//   const dispatch = useAppDispatch();
  
    useEffect(() => {
        if(msg){
            toast(msg);
        }
    }, [msg])
  return (
    <>
      <section className="bg-gray-50">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> 
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Create and account
              </h1>
              <form onSubmit={(e) => handleRegister(e)} className="space-y-4 md:space-y-6" action="POST">
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Name</label>
                      <Input
                type="text"
                name="username"
                id="name"
                value={userData.username}
                onChange={(e) => handleChange(e)}
                placeholder="name@company.com"
                className="bg-gray-50 text-black"
                required
              />
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                      <Input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={(e) => handleChange(e)}
                placeholder="name@company.com"
                className="bg-gray-50 text-black"
                required
              />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <Input
                type="password"
                name="password"
                id="password"
                value={userData.password}
                onChange={(e) => handleChange(e)}
                // placeholder="••••••••"
                className="bg-gray-50 text-black"
                required
              />
                  </div>
                  {/* <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                      <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 text-black"
                required
              />
                  </div>
                   */}
                    {/* <button >Makichuht</button> */}
                  <Button type="submit" variant="outline" className="w-full text-white">
              Signup
            </Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Signup