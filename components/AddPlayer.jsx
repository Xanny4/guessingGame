import { observer } from "mobx-react-lite";
import { useState } from "react";

const AddPlayer = observer(({ game }) => {
  const images = [
    "https://paramountshop.com/cdn/shop/products/SB-Standees-Pat-1_1200x_0b4a0c3a-230b-4507-bee3-8ef611f5ed46.jpg?v=1676173916",
    "https://i.pinimg.com/736x/c5/89/b4/c589b4ae7e2342573921140434b837cb.jpg",
    "https://cdn.shopify.com/s/files/1/2393/5817/files/SB_Classic_MrK_005_EA-S.jpg?v=1692953818",
    "https://cdn.shopify.com/s/files/1/2393/5817/files/renditionfile_5.jpg?v=1692953788",
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/800px-Sandy_Cheeks.svg.png",
  ];

  const [image, setImage] = useState(images.at(0));
  const [name, setName] = useState("");
  return (
    <>
      <div>
        <img style={{ height: 200 }} src={image} alt="" />
        <br />
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="Enter Holder"
        />
        <button
          onClick={() => {
            const randomImage = () => {
              let img = images[Math.floor(Math.random() * images.length)];
              if (img == image) return randomImage();
              else return img;
            };
            setImage(randomImage);
          }}
        >
          Randomize Image
        </button>
        <button onClick={() => game.addPlayer(name, image)}>Save</button>
      </div>
    </>
  );
});

export default AddPlayer;
