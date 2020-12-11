import { css } from "linaria";

css`
  :global() {
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

    html {
      box-sizing: border-box;
    }

    body {
      font-family: 'Rubik', sans-serif;
      padding: 0;
      margin: 0;
      color: black;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;
