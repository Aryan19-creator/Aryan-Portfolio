import SectionTitle from "../../components/SectionTitle";

function About(){
    const skills=["C","C++","Javascript","React.Js","Node.Js","C#",".NET","MongoDb","Sql"]
    return (
      <div>
        <SectionTitle title="About" />
        <div className="flex w-full items-center">
          <div className="h-[70vh] w-1/2">
            <dotlottie-player
              src="https://lottie.host/d87d83ff-1a0e-47e8-8686-0846dba3c956/DXlswqrvUn.json"
              background="transparent"
              speed="1"
              autoplay
            ></dotlottie-player>
            </div>
            <div className="flex flex-col gap-5 w-1/2">
              <p className="text-white">
                I am a passionate and dedicated software engineer with a robust
                academic background in Information Technology from the Birla
                Institute of Technology, Mesra. My academic journey, combined
                with practical experience gained through internships at The
                Software Practice PTE LTD. and CRIO.DO, has equipped me with a
                diverse skill set in software development. I have proficiency in
                multiple programming languages, including Java, C++, C#, and
                JavaScript, and hands-on experience with frameworks like
                React.js and Node.js. My projects, such as "Shopyay!" and
                "Netflix Clone," showcase my ability to create dynamic and
                responsive web applications, demonstrating my strong
                understanding of both frontend and backend development.
                Participation in coding competitions and solving complex
                problems on platforms like Codeforces and LeetCode has further
                honed my analytical and problem-solving skills.
              </p>
              <p className="text-white">
                Looking ahead, my long-term professional goal is to evolve into
                a lead software engineer, where I can drive innovative projects
                and mentor emerging talent. I am committed to continuous
                learning and staying at the forefront of technological
                advancements, aiming to contribute to solutions that enhance
                user experiences and drive business success. My enthusiasm for
                problem-solving and passion for technology drive me to seek
                opportunities where I can make a meaningful impact.
              </p>
            </div>
          </div>
          <div className="py-5">
            <h1 className="text-tertiary text-xl">
                Here are a few technologies I've been working with recently:
            </h1>
            <div className="flex flex-wrap gap-10 mt-5">
                {
                    skills.map((skill,index)=>(
                        <div className="border border-tertiary py-3 px-10">
                            <h1 className="text-tertiary">{skill}</h1>
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
      
    );
}
export default About;