import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const SingleProductTabs = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <TabGroup className="mt-10 ">
      <TabList className="w-full  flex gap-x-6 justify-center p-3">
        <Tab className="focus:outline-none hover:text-red-500">Description</Tab>
        <Tab>Reviews (3)</Tab>
        <Tab>Features</Tab>
        <Tab>Delivery & Return</Tab>
        <Tab>Videos</Tab>
      </TabList>
      <TabPanels>
        <TabPanel className="max-w-[850px] mx-auto ">
          <div className="flex flex-col justify-center mt-20">
            <p
              className="text-center "
              style={{
                height: isExpanded ? "auto" : "800px",
                overflow: "hidden",
              }}
              dangerouslySetInnerHTML={{
                __html: data.result.item.description.html,
              }}
            ></p>
            <button
              onClick={toggleExpansion}
              className="mb-6 mt-3 flex font-bold gap-x-2 items-center rounded-md justify-center w-fit mx-auto text-blue-800 border-blue-800 border-2 py-2 px-4 hover:animate-pulse"
            >
              {isExpanded ? "Show Less" : "Show More"}
              {isExpanded ?  <MdOutlineKeyboardDoubleArrowUp size={25}/> :  <MdOutlineKeyboardDoubleArrowDown size={25}/>}
             
            </button>
          </div>
        </TabPanel>

        <TabPanel>
          <div class="grid gap-y-4 content-stretch bg-gray-200 py-4 px-2 mt-6">
            {data.result.item.properties.list.map((item, index) => (
              <div className=" flex items-center gap-x-3">
                <span className="font-bold">{item.name}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 text-3xl py-px mb-4  font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Features
                </p>
              </div>
            </div>
            <div className="grid gap-8 row-gap-10 md:grid-cols-2 lg:grid-cols-3">
              {data.result.item.properties.list.map((item, index) => (
                <div className="w-[400px] sm:mx-auto flex flex-col justify-center gap-y-3 border border-gray-400 rounded-md py-4 px-4">
                  <h6 className=" text-xl font-bold ">{item.name}</h6>
                  <p className=" text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
            <div className="text-center mb-10">
              <h2 className="text-4xl tracking-tight font-bold text-primary-800">
                Highlighted Features
              </h2>
            </div>
            <div className="flex flex-col md:flex-row">
              {/* can help image */}
              <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                <img
                  className="w-1/2 md:w-full mx-auto"
                  src="https://placeholder.pics/svg/400"
                  alt="can_help_banner"
                />
              </div>
              {/* end can help image */}
              <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">
                      Dynamic Personalization:
                    </h3>
                    <p className="text-sm">
                      Our platform leverages user data and behavior to provide a
                      highly personalized experience, with dynamic content and
                      product recommendations that change in real-time.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">
                      Mobile-Optimized Interface
                    </h3>
                    <p className="text-sm">
                      Our website is designed with a mobile-first approach,
                      offering a seamless browsing experience across all
                      devices, including smartphones and tablets.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">
                      24/7 Customer Support
                    </h3>
                    <p className="text-sm">
                      ur U.S.-based customer support team is available around
                      the clock to answer any questions, resolve any issues, and
                      provide helpful solutions. Whether it's through email,
                      phone, or live chat, we're always here to support you.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">
                      Secure Payment Processing
                    </h3>
                    <p className="text-sm">
                      We use cutting-edge security measures to protect our
                      customers' sensitive information and ensure the safety of
                      all transactions made on our site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="video-player mt-20">
            <video
              controls
              poster={data.result.item.video.thumbnail}
              width="600"
              className="mx-auto"
            >
              <source src={data.result.item.video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
export default SingleProductTabs;
