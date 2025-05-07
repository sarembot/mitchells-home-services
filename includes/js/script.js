class Input {
  constructor(name, regex, errorMsg) {
    this.name = name;
    this.regex = regex; // Define custom regex filter
    this.errorMsg = errorMsg; // Define custom error message

    this.input = document.getElementById(this.name); // eg. fNameInput
    this.icon = document.getElementById(`${this.name}Icon`); // eg. fNameIcon
    this.iconDiv = document.getElementById(`${this.name}IconDiv`); // eg. fNameIcon
    this.errorSpan = document.getElementById(`${this.name}Error`); // Contianer for error message
    this.valid = false; // Keeps track of if the input is good/bad
  }

  // Classes to add when an input is good
  static goodInputClassList = [
    "border",
    "border-4",
    "focus-ring",
    "focus-ring-success",
    "border-success",
    "border-opacity-50",
  ];

  // Classes to add when an input is bad
  static badInputClassList = [
    "border",
    "border-4",
    "focus-ring",
    "focus-ring-danger",
    "border-danger",
    "border-opacity-50",
  ];

  // Input icons to toggle between
  static inputIcons = {
    neutral: "fs-6 bi-dash-circle",
    good: "fs-6 bi-check-circle",
    bad: "fs-6 bi-x-circle",
  };

  // Allows us to get the most recent value - rather than the initial value
  getUpdatedValue() {
    return this.input.value;
  }

  // Resets styles when an input is empty
  resetStyles() {
    // Remove any previous styles from input
    this.input.classList.remove(...Input.goodInputClassList);
    this.input.classList.remove(...Input.badInputClassList);
    this.icon.className = Input.inputIcons.neutral; // className clears prev classes

    // Remove any previous styles from icon
    this.iconDiv.classList.remove(...Input.goodInputClassList);
    this.iconDiv.classList.remove(...Input.badInputClassList);

    // Remove error message
    this.errorSpan.style.display = "none";
  }

  // Adds good styles/icon if an input is valid
  addGoodStyles() {
    this.input.classList.remove(...Input.badInputClassList); // Remove red styles
    this.input.classList.add(...Input.goodInputClassList); // Add green styles
    this.input.classList.add("border-start-0");

    this.iconDiv.classList.remove(...Input.badInputClassList);
    this.iconDiv.classList.add(...Input.goodInputClassList);
    this.iconDiv.classList.add("border-end-0");

    this.icon.className = Input.inputIcons.good; // Set checkmark icon
    this.errorSpan.style.display = "none"; // Hide error message
  }

  // Adds bad styles/icon if an input is invalid
  addBadStyles() {
    this.input.classList.remove(...Input.goodInputClassList); // Remove greens styles
    this.input.classList.add(...Input.badInputClassList); // Add red styles
    this.input.classList.add("border-start-0");

    this.iconDiv.classList.add(...Input.badInputClassList);
    this.iconDiv.classList.add("border-end-0");

    this.icon.className = Input.inputIcons.bad; // Set X icon
    this.errorSpan.textContent = this.errorMsg; // Display error message
    this.errorSpan.style.display = "block";
  }
}

const contact = {
  fNameInput: new Input(
    "fNameInput",
    /^[a-zA-Z]+$/,
    "Please enter a valid first name"
  ),
  lNameInput: new Input(
    "lNameInput",
    /^[a-zA-Z]+$/,
    "Please enter a valid last name"
  ),
  emailInput: new Input(
    "emailInput",
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Please enter a valid email address"
  ),
  messageInput: new Input("messageInput", /^.{10,}$/, "Please enter a message"),
};

const contactForm = document.getElementById("contactForm");
