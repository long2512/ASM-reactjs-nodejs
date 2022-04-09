import { Link } from "react-router-dom"
import { Ipost } from "../types/post"

// type PostListProps = {
//     posts: Ipost[];
// }
export const AboutPage = () => {
    return (
        <div className="py-24">
            {/* {props.posts.map((item) => { */}
                <div className="content flex w-3/4 mx-auto gap-8">
                    <div className="img">
                        <img src="https://uicookies.com/demo/theme/trainer/img/about_me.jpg" width='100%' alt="" />
                    </div>
                    <div className="infomation">
                        <h2 className="text-5xl font-[700] py-3 mb-8 border-b-4 border-cyan-500 ">About Me</h2>
                        <span className='pb-8 block text-xl text-[#888] text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eaque quasi, ipsa temporibus voluptatibus maxime rem fugiat, voluptate iste exercitationem alias architecto dolores dolor animi perferendis facere suscipit deserunt odit!</span>
                        <span className='pb-8 block text-xl text-[#888] text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eaque quasi, ipsa temporibus voluptatibus maxime rem fugiat, voluptate iste exercitationem alias architecto dolores dolor animi perferendis facere suscipit deserunt odit!</span>
                        <button className="bg-cyan-500 p-3 rounded-xl text-xl font-[500] text-white hover:bg-cyan-700">Read more about me</button>
                    </div>
                </div>
            {/* })} */}


        </div>
    )
}
