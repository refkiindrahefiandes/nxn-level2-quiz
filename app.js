const root = ReactDOM.createRoot(document.getElementById("root"));

function Button({ text, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

function Step({ page }) {
  return (
    <div className="step">
      <span className={`${page === 1 ? "active" : page > 1 && "completed"}`}>1</span>
      <span className={`${page === 2 ? "active" : page > 2 && "completed"}`}>2</span>
      <span className={`${page === 3 ? "active" : page > 3 && "completed"}`}>3</span>
      <span className={page === 4 ? "active" : ""}>4</span>
    </div>
  );
}

function ImageIcon({ source, width, height }) {
  return <img src={source} style={{ width, height }} alt="icon" />;
}

function FormTitle({ title, description }) {
  return (
    <div className="form-title">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FormGroup({ inputRefs, input, image, value, error, onChange }) {
  const { type, name, placeholder } = input;
  const { source, width, height } = image;

  return (
    <div className="form-input">
      <label htmlFor={name} className={`form-label  ${error && "form-label-error"}`}>
        {placeholder}
      </label>
      <div className="input-group">
        <input
          ref={inputRefs}
          className="form-control"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <ImageIcon source={source} width={width} height={height} />
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

function TabForm({ active, onClick, name, source, width, height }) {
  return (
    <div className={`form-tab ${active}`} onClick={onClick} data-value={name}>
      <div className="box-img">
        <ImageIcon source={source} width={width} height={height} />
      </div>
      <h3>{name.replace("-", " ")}</h3>
    </div>
  );
}

function RadioForm({ checked, onChange, label, id }) {
  return (
    <div className="form-radio">
      <input type="radio" name="budget" checked={checked} onChange={onChange} value={label} id={id} className="radio-control" />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
    </div>
  );
}

// Form Contact
function ContactForm({ inputRefs, formData, formError, page, onChange }) {
  const { nameRef, emailRef, phoneNumberRef, companyRef } = inputRefs;

  return (
    <div className="form-wrapper">
      <Step page={page} />
      <form
        onSubmit={function (e) {
          e.preventDefault();
        }}
      >
        <FormTitle title="Contact details" description="Lorem ipsum dolor sit amet consectetur adipisc." />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
          <FormGroup
            inputRefs={nameRef}
            input={{ type: "text", name: "name", placeholder: "Name" }}
            image={{ source: "assets/icon/person.png", width: "20px", height: "25px" }}
            value={formData.name}
            error={formError.name}
            onChange={onChange}
          />
          <FormGroup
            inputRefs={emailRef}
            input={{ type: "text", name: "email", placeholder: "Email" }}
            image={{ source: "assets/icon/email.png", width: "23px", height: "16px" }}
            value={formData.email}
            error={formError.email}
            onChange={onChange}
          />
          <FormGroup
            inputRefs={phoneNumberRef}
            input={{ type: "number", name: "phone_number", placeholder: "Phone Number" }}
            image={{ source: "assets/icon/phone.png", width: "14px", height: "26px" }}
            value={formData.phone_number}
            error={formError.phone_number}
            onChange={onChange}
          />
          <FormGroup
            inputRefs={companyRef}
            input={{ type: "text", name: "company", placeholder: "Company" }}
            image={{ source: "assets/icon/company.png", width: "14px", height: "28px" }}
            value={formData.company}
            error={formError.company}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
}

// Form Service
function ServicesForm({ formData, page, onClick }) {
  return (
    <div className="form-wrapper">
      <Step page={page} />
      <form
        onSubmit={function (e) {
          e.preventDefault();
        }}
      >
        <FormTitle title="Our services" description="Please select which service you are interested in." />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
          <TabForm
            active={formData.service == "Development" ? "active" : ""}
            onClick={onClick}
            name="Development"
            source="assets/icon/web-development.png"
            width="37.46px"
            height="32px"
          />
          <TabForm
            active={formData.service == "Web-Design" ? "active" : ""}
            onClick={onClick}
            name="Web-Design"
            source="assets/icon/web-design.png"
            width="37.46px"
            height="32px"
          />
          <TabForm
            active={formData.service == "Marketing" ? "active" : ""}
            onClick={onClick}
            name="Marketing"
            source="assets/icon/marketing.png"
            width="34.73px"
            height="28px"
          />
          <TabForm
            active={formData.service == "Other" ? "active" : ""}
            onClick={onClick}
            name="Other"
            source="assets/icon/other.png"
            width="39.29px"
            height="41.36px"
          />
        </div>
      </form>
    </div>
  );
}

// Form Service
function BudgetForm({ formData, page, onChange }) {
  return (
    <div className="form-wrapper">
      <Step page={page} />
      <form
        onSubmit={function (e) {
          e.preventDefault();
        }}
      >
        <FormTitle title="What’s your project budget?" description="Please select the project budget range you have in mind." />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
          <RadioForm checked={formData.budget === "$5.000 - $10.000" && "checked"} onChange={onChange} label="$5.000 - $10.000" id="1" />
          <RadioForm checked={formData.budget === "$10.000 - $20.000" && "checked"} onChange={onChange} label="$10.000 - $20.000" id="2" />
          <RadioForm checked={formData.budget === "$20.000 - $50.000" && "checked"} onChange={onChange} label="$20.000 - $50.000" id="3" />
          <RadioForm checked={formData.budget === "$50.000 +" && "checked"} onChange={onChange} label="$50.000 +" id="4" />
        </div>
      </form>
    </div>
  );
}

// Form Submit
function SubmitForm({ page, onClick }) {
  return (
    <div className="form-wrapper">
      <Step page={page} />
      <form
        onSubmit={function (e) {
          e.preventDefault();
        }}
        style={{ textAlign: "center", paddingInline: 67 }}
      >
        <ImageIcon source="assets/icon/success.png" width="157.36px" height="143.41px" />
        <FormTitle
          title="Submit your quote request"
          description="Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours."
        />
        <Button text="Submit" className="btn btn-primary" onClick={onClick} />
      </form>
    </div>
  );
}

function App() {
  const [page, setPage] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone_number: "",
    company: "",
    service: "Development",
    budget: "$50.000 +",
  });
  const [formError, setFormError] = React.useState({});

  const inputRefs = {
    nameRef: React.useRef(),
    emailRef: React.useRef(),
    phoneNumberRef: React.useRef(),
    companyRef: React.useRef(),
  };

  function handleSetValue(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSelectServices(e) {
    setFormData({ ...formData, service: e.currentTarget.getAttribute("data-value") });
  }

  function handleCheckedBudget(e) {
    setFormData({ ...formData, budget: e.target.value });
  }

  function handleContactStep(inputData) {
    const { name, email, phone_number, company } = inputData;
    const errors = { name, email, phone_number, company };

    const emailRegex = /^[\w.+\-]+@gmail\.com$/g;
    const phoneRegex = /^0[8][0-9\w]{8,12}$/g;

    // Set error messages
    for (const item in errors) {
      if (!errors[item]) {
        errors[item] = `${item.charAt(0).toUpperCase() + item.slice(1).replace("_", " ")} is required`;
      } else if (item == "email") {
        !emailRegex.test(errors.email) ? (errors.email = "Email is invalid") : delete errors.email;
      } else if (item == "phone_number") {
        !phoneRegex.test(errors.phone_number) ? (errors.phone_number = "Phone number is invalid") : delete errors.phone_number;
      } else {
        delete errors[item];
      }
      setFormError(errors);
    }

    // Focus input
    if (Object.keys(errors).length === 0) {
      setPage(page + 1);
    } else {
      for (const input in inputRefs) {
        if (inputRefs[input].current.value === "") {
          inputRefs[input].current.focus();
          return;
        }
      }
    }
  }

  function handleSubmitForm() {
    const service = formData.service.replace(/[-]/g, " ");
    const budget = formData.budget.replace(/[$.+ ]/g, "");
    const data = { name: formData.name, email: formData.email, phone: formData.phone_number, service: service, budget: budget };
    const convertToString = JSON.stringify(data);
    alert(convertToString);
  }

  function onClickAction() {
    if (page == 1) {
      handleContactStep.bind(this, formData)();
    } else {
      setPage(page + 1);
    }
  }

  const style = page == 1 && {
    flexEnd: {
      justifyContent: "flex-end",
    },
  };

  return (
    <div className="container">
      <div className="header-wrapper">
        <h1>Get a project quote</h1>
        <p>Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</p>
      </div>
      {page == 1 && <ContactForm formData={formData} formError={formError} inputRefs={inputRefs} page={page} onChange={handleSetValue} />}
      {page == 2 && <ServicesForm formData={formData} page={page} onClick={handleSelectServices} />}
      {page == 3 && <BudgetForm formData={formData} page={page} onChange={handleCheckedBudget} />}
      {page == 4 && <SubmitForm page={page} onClick={handleSubmitForm} />}
      <div className="btn-wrapper" style={style.flexEnd}>
        {page !== 1 && (
          <Button
            text="Previous step"
            className="btn btn-secondary"
            onClick={function () {
              setPage(page - 1);
            }}
          />
        )}
        {page !== 4 && <Button text="Next step" className="btn btn-primary" onClick={onClickAction} />}
      </div>
    </div>
  );
}

root.render(<App />);
