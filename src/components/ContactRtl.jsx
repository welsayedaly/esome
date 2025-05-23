import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "./Map";

const ContactRtl = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_irrbqsm",
        "template_znj2k35",
        form.current,
        "ak7qUr-nX1ojamDdK"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ops Message Not Sent!", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <div className="contaienr">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>اتصل</span>
                <h3>ابقى على تواصل</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <Map />
          {/* MENU WRAP */}

          <div className="fields">
            <form
              className="contact_form"
              id="myForm"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="first">
                <ul>
                  <li>
                    <input type="text" name="name" placeholder="اسم" />
                  </li>
                  {/* END FIRST NAME */}

                  <li>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="بريد الالكتروني"
                    />
                  </li>
                  {/* END EMAIL */}

                  <li>
                    <textarea name="message" placeholder="رسالة"></textarea>
                  </li>
                  {/* END SUBJECT MESSAGE */}
                </ul>
              </div>
              <div className="tokyo_tm_button">
                <button type="submit" className="ib-button">
                  أرسل رسالة
                </button>
              </div>
              {/* END SUBMIT BUTTON */}
            </form>
            {/* END FORM */}
          </div>
          {/* END FIELDS */}
        </div>
      </div>
      {/* END COTACT */}
    </>
  );
};

export default ContactRtl;
