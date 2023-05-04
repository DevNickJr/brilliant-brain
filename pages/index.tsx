import Head from "next/head";
import Script from "next/script";
import Header from '@/components/Header'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-32">
        <Header />
        <section className="section flex flex-col md:flex-row gap-4 md:gap-12 mb-20">
          <div className="flex-1 flex flex-col gap-4">
            <p>STUDY WITH US</p>
            <h1>FREE SCHOLARSHIP FOR EVERY BRIGHT STUDENT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id possimus cupiditate at nemo molestias incidunt vel a expedita inventore minus corrupti ex, aspernatur aperiam dolor eveniet esse adipisci non?</p>
            <div>
              <p>Lets get started</p>
              <button>Connect with us</button>
            </div>
          </div>
          <div className="flex-1 bg-gray-200 w-full h-96 md:h-[500px]"></div>
        </section>
        <section className="section flex flex-col md:flex-row gap-4 md:gap-12 mb-32">
          <div className="flex-1 bg-gray-200 w-full h-96 md:h-[500px]"></div>
          <div className="flex-1 flex flex-col gap-4">
            <p>STUDY WITH US</p>
            <h1>FREE SCHOLARSHIP FOR EVERY BRIGHT STUDENT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id possimus cupiditate at nemo molestias incidunt vel a expedita inventore minus corrupti ex, aspernatur aperiam dolor eveniet esse adipisci non?</p>
            <div>
              <p>Lets get started</p>
              <button>Connect with us</button>
            </div>
          </div>
        </section>
        <section className="section mb-32">
          <div className="flex flex-col items-center gap-4">
            <h3>OUR PROGRAMMES</h3>
            <p>PICK YOUR LEVEL OF EDUCATION</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-200 w-full h-96"></div>
            <div className="bg-gray-200 w-full h-96"></div>
            <div className="bg-gray-200 w-full h-96"></div>
            <div className="bg-gray-200 w-full h-96"></div>
          </div>
        </section>
        <section className="section mb-32">
          <div className="flex flex-col items-center gap-4">
            <h3>WHICH ONE IS SUITABLE FOR YOU</h3>
            <p>Are you a student </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <div className="w-full max-w-sm bg-gray-200 h-96"></div>
            <div className="w-full max-w-sm bg-gray-200 h-96"></div>
          </div>
        </section>
        <section className="section mb-32 text-center">
          <div className="flex flex-col items-center gap-4">
            <h3>Our Ambassadors</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, explicabo recusandae necessitatibus voluptas nobis voluptatum nesciunt incidunt facilis, a provident dicta repudiandae ratione mollitia fuga deleniti! Alias explicabo aliquid repellat! </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section mb-32 py-20 px-4 flex flex-col items-center gap-4 bg-red-400 text-white">
          <div className="flex flex-col items-center gap-4 max-w-2xl">
            <h3>Looking for a bright new future. It starts here</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem illo nostrum aperiam voluptatibus vitae? Quisquam laboriosam enim ipsum modi! Molestiae eveniet fugit perferendis quaerat ex et porro beatae enim quas!</p>
            <button>Get in Touch</button>
          </div>
        </section>
        <section className="section mb-32 text-center">
          <div className="flex flex-col items-center gap-4">
            <h3>Scholarship Winners</h3>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section flex flex-col md:flex-row gap-4 md:gap-12 mb-32 bg-red-400 text-white">
          <div className="flex-1 flex flex-col gap-4">
            <h2>Become Part of Us on Our Platform</h2>
            <p>FREE SCHOLARSHIP FOR EVERY BRIGHT STUDENT</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id possimus cupiditate at nemo molestias incidunt vel a expedita inventore minus corrupti ex, aspernatur aperiam dolor eveniet esse adipisci non?</p>
            <div>
              <p>Lets get started</p>
              <button>Connect with us</button>
            </div>
          </div>
          <div className="flex-1 bg-gray-200 w-full h-96 md:h-[500px]"></div>
        </section>
        <section className="section mb-32 text-center">
          <h2>News and Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-200 w-full h-96"></div>
            <div className="bg-gray-200 w-full h-96"></div>
            <div className="bg-gray-200 w-full h-96"></div>
          </div>
        </section>
        <section className="section flex flex-col md:flex-row gap-4 md:gap-12 py-20 mb-32 bg-red-400 text-white">
          <div className="flex-1 flex flex-col gap-4">
            <h2>Become Part of Us on Our Platform</h2>
            <p>FREE SCHOLARSHIP FOR EVERY BRIGHT STUDENT</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id possimus cupiditate at nemo molestias incidunt vel a expedita inventore minus corrupti ex, aspernatur aperiam dolor eveniet esse adipisci non?</p>
            <div>
              <p>Lets get started</p>
              <button>Connect with us</button>
            </div>
          </div>
          <form className="flex-1 flex flex-col gap-4 w-full">
            <input type="text" name="username" id="username" placeholder="username" />
            <input type="email" name="email" id="email" placeholder="Enter your email address" />
            <select name="ty[e" id="type">
              <option value="student">Student</option>

            </select>
          </form>
        </section>
        <section className="section mb-32 text-center">
          <div className="flex flex-col items-center gap-4">
            <h3>Our Advisory Members</h3>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
            <div className="w-full max-w-sm flex flex-col gap-4 justify-center">
              <div className="bg-gray-200 h-72 w-72 rounded-full"></div>
              <div>
                <h4>John Doe</h4>
                <span>Lorem Ileum</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
