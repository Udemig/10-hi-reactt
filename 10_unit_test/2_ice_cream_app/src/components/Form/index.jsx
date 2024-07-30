import { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <form className="mb-5 d-flex justify-content-center align-items-center gap-3">
      <input
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-check-input"
      />
      <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>

      <button disabled={!isChecked} className="btn btn-primary">
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
