import githubIcon from "components/icons/github";

export default function OpenSource() {
  return (
    <>
      <div className=""  style={{ paddingTop: "10px", paddingBottom: "120px" }}>
          <center>

          <h2 className="my-4 lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal"> Yes, it is open-source!</h2>
                <p className="my-4 mb-8 font-light text-gray-500 text-2xl dark:text-gray-400
                leading-normal">       Mercury is an <i>open-source</i> framework. It is available on <b>AGPL v3</b> license. <br className='sm:block hidden'/>
            We offer a commercial-friendly license with more features, dedicated support and private forks.</p>
                {/* <a href="/pricing/"
                  className="text-white bg-blue-600 hover:bg-blue-700  
                              focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                              text-xl px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Mercury Pro</a>

                <span className="m-2"></span>
                <br className="sm:hidden block"/>
                <br className="sm:hidden block"/> */}
                <a href="https://github.com/mljar/mercury" className="font-medium
                        hover:bg-blue-600   hover:text-white bg-primary
                        text-xl px-5 py-2.5 rounded-lg
                        border hover:border-0" target="_blank">{githubIcon} Star on GitHub</a>

        </center>
      </div>
    </>
  )
}
