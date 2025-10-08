import React, { useContext } from "react";
import { BookDetails } from "../../../Root/Root";
import Download from "../../../B12-A08-Hero-Apps/assets/download.png";
import Ratings from "../../../B12-A08-Hero-Apps/assets/rating.png";
import REview from "../../../B12-A08-Hero-Apps/assets/review.png";

const Details = () => {
  const { details } = useContext(BookDetails);
  return (
    <div>
      {/* Details Container */}
      <div className="flex items-center border-b-1 border-gray-500">
        <div className="ml-8 mr-5 my-8  p-2 ">
          <img
            className="w-[390px] rounded-2xl"
            src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className=" w-full my-12 ">
          <h1 className="font-bold text-3xl uppercase">
            <span>{details.title}:</span>
            <span>g nbn n n</span>
          </h1>
          <p className="text-sm text-gray-700 my-2">
            Developed by: <span>{details.
companyName
}</span>
          </p>
          <div className="border-1 opacity-70 border-gray-500 w-full"></div>
          <div className="flex space-x-28 mt-10">
            <div className="flex flex-col items-center text-center space-y-2">
              <img src={Download} alt="" srcset="" />
              <p> Downloads</p>
              <span className="text-3xl font-bold">{details.downloads}</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <img src={Ratings} alt="" srcset="" />
              <p>Average Ratings</p>
              <span className="text-3xl font-bold">{details.ratingAvg}</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <img className="w-[25px]" src={REview} alt="" srcset="" />
              <p>Total Reviews</p>
              <span className="text-3xl font-bold">{details.reviews}</span>
            </div>
          </div>
          <button className="btn btn-success text-white">Install Now</button>
        </div>
      </div>

      {/* Ratings Container */}
      <div> </div>

      {/* DescripTion Container */}
      <div>
        <h1 className="text-2xl font-semibold my-4">Describtion</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          animi, consequatur inventore doloribus reprehenderit eveniet velit
          ipsa qui facere quis officia porro! Id dolorum quidem earum fugiat.
          Culpa ipsum voluptates, adipisci tempore amet quaerat sapiente ut
          obcaecati quisquam quos nemo cupiditate porro quibusdam tenetur rerum
          assumenda, nihil architecto voluptatum fugiat? Exercitationem eum a
          dignissimos soluta rerum ullam in nisi nihil, eius quo amet minus
          repudiandae modi blanditiis! Voluptas sunt odio accusamus cum dicta
          quidem aliquam, maiores praesentium hic earum enim ullam architecto
          laboriosam doloremque quo rem ab nobis quaerat ex nisi, beatae
          dignissimos. Saepe voluptates quod minima, obcaecati quidem excepturi?
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
          doloremque temporibus velit quas amet perspiciatis magnam minima
          molestiae excepturi deserunt incidunt corrupti non totam dolores nulla
          quidem culpa consectetur accusantium iusto iste. Obcaecati dolorum
          libero quis repellendus nostrum eum soluta omnis sed id ullam aliquam
          sapiente corporis, quo repellat temporibus iusto quas. Alias culpa
          reprehenderit labore similique perferendis, laudantium veniam
          distinctio repellat architecto eum autem excepturi eveniet saepe
          provident officia consequatur totam recusandae magni unde possimus
          quos nobis eos delectus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste
          quae, aliquid autem perferendis placeat quidem recusandae aut, dolorem
          harum fugit assumenda, eligendi distinctio atque! Sit laborum, minima
          aliquam rem soluta assumenda alias a est. Similique mollitia possimus
          sint consectetur itaque dolorem ipsam sit esse a modi, sapiente, odio
          dolore nam fugit, ad porro laborum sunt. Non eum reprehenderit ipsa
          quibusdam necessitatibus facere culpa animi quos! Eligendi odit
          incidunt hic.
        </p>
      </div>
    </div>
  );
};

export default Details;
