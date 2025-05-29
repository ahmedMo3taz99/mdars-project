import styled from "styled-components";

const MainForm = styled.div`
  width: 39%;
  background: var(--white-color);
  border-radius: 15px;
  padding: 50px 24px 26px;

  h3 {
    font-weight: 600;
    color: var(--primary-color);
    text-align: center;
    max-width: 243px;
    margin: 0 auto 24px;
  }

  .form-field {
    margin-bottom: 10px;

    label {
      display: block;
      font-size: 16px;
      font-weight: 500;
      color: var(--dark-color);
      margin-bottom: 10px;
    }

    textarea,
    input {
      width: 100%;
      border: 0;
      outline: 0;
      background: var(--offwhite-color);
      border-radius: 10px;
      padding: 12px;
      color: var(--grey-color);
      /* font-family: "DM Sans", sans-serif; */
      font-size: 16px;
    }
  }

  button {
    border: 0;
    cursor: pointer;
    margin-right: auto;
    max-width: 218px;
    padding: 14px;
  }
`;

export default function FaqForm() {
  return (
    <MainForm data-aos="fade-right" data-aos-duration="2000">
      <h3>هل لديك المزيد من الأسئلة؟ ارسل لنا استفسارك الان</h3>
      <form className="question-form">
        <div className="form-field">
          <label htmlFor="name">الاسم</label>
          <input type="text" id="name" placeholder="اكتب الاسم كاملا" />
        </div>
        <div className="form-field">
          <label htmlFor="email">الايميل</label>
          <input type="email" id="email" placeholder="اكتب الايميل" />
        </div>
        <div className="form-field">
          <label htmlFor="message">الرسالة</label>
          <textarea
            rows="5"
            cols="5"
            name="message"
            id="message"
            placeholder="اكتب رسالتك او استفسارك هنا"
          ></textarea>
        </div>
        <button className="secondary-btn">ارسل</button>
      </form>
    </MainForm>
  );
}
