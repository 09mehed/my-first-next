
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const Profile = () => {
//     const [user, setUser] = useState(null);
//     const router = useRouter();

//     useEffect(() => {
//         const fetchUser = async () => {
//             const { getUser } = getKindeServerSession(); 
//             const userData = await getUser(); 
//             if (!userData) {
//                 router.push('/login'); 
//             } else {
//                 setUser(userData); 
//             }
//         };

//         fetchUser();
//     }, [router]);

//     if (!user) {
//         return null; 
//     }

//     return (
//         <div className="w-full min-h-screen flex justify-center items-center">
//             <div className="text-center">
//                 <h1 className="text-3xl font-bold">Welcome to my Profile</h1>
//                 <p className="text-lg mt-2">It is a secure page</p>
//             </div>
//         </div>
//     );
// };

// export default Profile;


