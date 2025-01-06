import React from "react";
import msgIcon from "../assets/msg-icon.png";
import mailIcon from "../assets/mail-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import locationIcon from "../assets/location-icon.png";
import whiteArrow from "../assets/white-arrow.png";

const imgClass = "inline w-6";
const liClass = "flex items-center gap-2 my-3";
const inputClass =
  "block w-full bg-[#ebecfe] p-3 border-0 outline-0 mt-1 mb-3 rounded-md";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e27a63e2-44a9-4388-b6dc-4dc69f44919b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact w-[70%] my-20 mx-auto flex justify-between">
      <div className="basis-[48%] text-[#676767]">
        <div className="flex items-center gap-2 mb-3">
          <h1 className="text-[#000f38] font-medium text-2xl">
            Send us a message
          </h1>
          <img className="w-9" src={msgIcon} />
        </div>
        <p className="max-w-[450px]">
          Feel free to reach out Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempora facilis, molestiae praesentium nemo voluptas
          obcaecati distinctio consequuntur corporis maiores, deserunt aperiam
          sapiente? Soluta voluptas reiciendis error aperiam, voluptatum
          voluptates quibusdam.
        </p>
        <ul>
          <li className={liClass}>
            <img src={mailIcon} className={imgClass} /> contact@adixshrma.dev
          </li>
          <li className={liClass}>
            <img src={phoneIcon} className={imgClass} /> +1 123-456-7890
          </li>
          <li className={liClass}>
            <img src={locationIcon} className={imgClass} /> 77 Massachusetts
            Ave, Cambridge <br />
            MA 02139 United States
          </li>
        </ul>
      </div>
      <div className="basis-[48%] text-[#676767]">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            className={inputClass}
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            className={inputClass}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter Phone Number"
            required
          />
          <label htmlFor="message">Enter Your Message</label>
          <textarea
            className={`${inputClass} resize-none`}
            name="message"
            id="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button className="dark-btn flex items-center gap-1" type="submit">
            Submit <img className="inline w-5" src={whiteArrow} />
          </button>
          <span className="block my-2">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
