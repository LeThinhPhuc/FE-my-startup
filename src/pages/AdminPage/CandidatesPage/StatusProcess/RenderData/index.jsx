const renderData = [
    {idProcess:0,
    title:"RECEIVED CV",
    decr:"Received CV from candidate",
    button:"Approved CV",
  svg:<svg
    class="h-3 w-3"
    fill="#1e429f"
    height="200px"
    width="200px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xml:space="preserve"
    stroke="#1e429f"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M320,213.333c-23.531,0-42.667,19.136-42.667,42.667h85.333C362.667,232.469,343.531,213.333,320,213.333z"></path>{" "}
            <path d="M320,170.667c11.776,0,21.333-9.579,21.333-21.333c0-11.755-9.557-21.333-21.333-21.333s-21.333,9.579-21.333,21.333 C298.667,161.088,308.224,170.667,320,170.667z"></path>{" "}
            <path d="M448,0H64C52.203,0,42.667,9.557,42.667,21.333v469.333C42.667,502.443,52.203,512,64,512h384 c11.797,0,21.333-9.557,21.333-21.333V21.333C469.333,9.557,459.797,0,448,0z M128,106.667h42.667 c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333H128c-11.797,0-21.333-9.557-21.333-21.333 S116.203,106.667,128,106.667z M128,170.667h85.333c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333H128 c-11.797,0-21.333-9.557-21.333-21.333S116.203,170.667,128,170.667z M128,234.667h21.333c11.797,0,21.333,9.557,21.333,21.333 s-9.536,21.333-21.333,21.333H128c-11.797,0-21.333-9.557-21.333-21.333S116.203,234.667,128,234.667z M170.667,426.667H128 c-11.797,0-21.333-9.557-21.333-21.333S116.203,384,128,384h42.667c11.797,0,21.333,9.557,21.333,21.333 S182.464,426.667,170.667,426.667z M384,426.667H234.667c-11.797,0-21.333-9.557-21.333-21.333S222.869,384,234.667,384H384 c11.797,0,21.333,9.557,21.333,21.333S395.797,426.667,384,426.667z M384,362.667H128c-11.797,0-21.333-9.557-21.333-21.333 c0-11.776,9.536-21.333,21.333-21.333h256c11.797,0,21.333,9.557,21.333,21.333C405.333,353.109,395.797,362.667,384,362.667z M405.333,277.333c0,11.776-9.536,21.333-21.333,21.333H256c-11.797,0-21.333-9.557-21.333-21.333V256 c0-27.968,13.696-52.587,34.539-68.16c-8.171-10.752-13.205-24-13.205-38.507c0-35.285,28.715-64,64-64s64,28.715,64,64 c0,14.507-5.035,27.755-13.205,38.507c20.843,15.573,34.539,40.192,34.539,68.16V277.333z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>,
  svg1:<svg
  class="h-3 w-3"
  fill="#73737D"
  height="200px"
  width="200px"
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 512 512"
  xml:space="preserve"
  stroke="#1e429f"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    {" "}
    <g>
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M320,213.333c-23.531,0-42.667,19.136-42.667,42.667h85.333C362.667,232.469,343.531,213.333,320,213.333z"></path>{" "}
          <path d="M320,170.667c11.776,0,21.333-9.579,21.333-21.333c0-11.755-9.557-21.333-21.333-21.333s-21.333,9.579-21.333,21.333 C298.667,161.088,308.224,170.667,320,170.667z"></path>{" "}
          <path d="M448,0H64C52.203,0,42.667,9.557,42.667,21.333v469.333C42.667,502.443,52.203,512,64,512h384 c11.797,0,21.333-9.557,21.333-21.333V21.333C469.333,9.557,459.797,0,448,0z M128,106.667h42.667 c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333H128c-11.797,0-21.333-9.557-21.333-21.333 S116.203,106.667,128,106.667z M128,170.667h85.333c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333H128 c-11.797,0-21.333-9.557-21.333-21.333S116.203,170.667,128,170.667z M128,234.667h21.333c11.797,0,21.333,9.557,21.333,21.333 s-9.536,21.333-21.333,21.333H128c-11.797,0-21.333-9.557-21.333-21.333S116.203,234.667,128,234.667z M170.667,426.667H128 c-11.797,0-21.333-9.557-21.333-21.333S116.203,384,128,384h42.667c11.797,0,21.333,9.557,21.333,21.333 S182.464,426.667,170.667,426.667z M384,426.667H234.667c-11.797,0-21.333-9.557-21.333-21.333S222.869,384,234.667,384H384 c11.797,0,21.333,9.557,21.333,21.333S395.797,426.667,384,426.667z M384,362.667H128c-11.797,0-21.333-9.557-21.333-21.333 c0-11.776,9.536-21.333,21.333-21.333h256c11.797,0,21.333,9.557,21.333,21.333C405.333,353.109,395.797,362.667,384,362.667z M405.333,277.333c0,11.776-9.536,21.333-21.333,21.333H256c-11.797,0-21.333-9.557-21.333-21.333V256 c0-27.968,13.696-52.587,34.539-68.16c-8.171-10.752-13.205-24-13.205-38.507c0-35.285,28.715-64,64-64s64,28.715,64,64 c0,14.507-5.035,27.755-13.205,38.507c20.843,15.573,34.539,40.192,34.539,68.16V277.333z"></path>{" "}
        </g>{" "}
      </g>{" "}
    </g>{" "}
  </g>
</svg>
    },
    {idProcess:1,
      title:"CV WAS APPROVED",
      decr:"Reviewed and approved CV's candidate",
      button:"Send a test to candidate",
      svg:<svg
      class="h-3 w-3"
      fill="#1e429f"
      height="200px"
      width="200px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xml:space="preserve"
      stroke="#73737D"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M320,213.333c-23.531,0-42.667,19.136-42.667,42.667h85.333C362.667,232.469,343.531,213.333,320,213.333z"></path>{" "}
              <path d="M320,170.667c11.776,0,21.333-9.579,21.333-21.333c0-11.755-9.557-21.333-21.333-21.333s-21.333,9.579-21.333,21.333 C298.667,161.088,308.224,170.667,320,170.667z"></path>{" "}
              <path d="M448,0H64C52.203,0,42.667,9.557,42.667,21.333v469.333C42.667,502.443,52.203,512,64,512h384 c11.797,0,21.333-9.557,21.333-21.333V21.333C469.333,9.557,459.797,0,448,0z M128,106.667h42.667 c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333H128c-11.797,0-21.333-9.557-21.333-21.333 S116.203,106.667,128,106.667z M128,170.667h85.333c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333H128 c-11.797,0-21.333-9.557-21.333-21.333S116.203,170.667,128,170.667z M128,234.667h21.333c11.797,0,21.333,9.557,21.333,21.333 s-9.536,21.333-21.333,21.333H128c-11.797,0-21.333-9.557-21.333-21.333S116.203,234.667,128,234.667z M170.667,426.667H128 c-11.797,0-21.333-9.557-21.333-21.333S116.203,384,128,384h42.667c11.797,0,21.333,9.557,21.333,21.333 S182.464,426.667,170.667,426.667z M384,426.667H234.667c-11.797,0-21.333-9.557-21.333-21.333S222.869,384,234.667,384H384 c11.797,0,21.333,9.557,21.333,21.333S395.797,426.667,384,426.667z M384,362.667H128c-11.797,0-21.333-9.557-21.333-21.333 c0-11.776,9.536-21.333,21.333-21.333h256c11.797,0,21.333,9.557,21.333,21.333C405.333,353.109,395.797,362.667,384,362.667z M405.333,277.333c0,11.776-9.536,21.333-21.333,21.333H256c-11.797,0-21.333-9.557-21.333-21.333V256 c0-27.968,13.696-52.587,34.539-68.16c-8.171-10.752-13.205-24-13.205-38.507c0-35.285,28.715-64,64-64s64,28.715,64,64 c0,14.507-5.035,27.755-13.205,38.507c20.843,15.573,34.539,40.192,34.539,68.16V277.333z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>,
    svg1:<svg
    class="h-3 w-3"
    fill="#73737D"
    height="200px"
    width="200px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xml:space="preserve"
    stroke="#73737D"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M320,213.333c-23.531,0-42.667,19.136-42.667,42.667h85.333C362.667,232.469,343.531,213.333,320,213.333z"></path>{" "}
            <path d="M320,170.667c11.776,0,21.333-9.579,21.333-21.333c0-11.755-9.557-21.333-21.333-21.333s-21.333,9.579-21.333,21.333 C298.667,161.088,308.224,170.667,320,170.667z"></path>{" "}
            <path d="M448,0H64C52.203,0,42.667,9.557,42.667,21.333v469.333C42.667,502.443,52.203,512,64,512h384 c11.797,0,21.333-9.557,21.333-21.333V21.333C469.333,9.557,459.797,0,448,0z M128,106.667h42.667 c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333H128c-11.797,0-21.333-9.557-21.333-21.333 S116.203,106.667,128,106.667z M128,170.667h85.333c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333H128 c-11.797,0-21.333-9.557-21.333-21.333S116.203,170.667,128,170.667z M128,234.667h21.333c11.797,0,21.333,9.557,21.333,21.333 s-9.536,21.333-21.333,21.333H128c-11.797,0-21.333-9.557-21.333-21.333S116.203,234.667,128,234.667z M170.667,426.667H128 c-11.797,0-21.333-9.557-21.333-21.333S116.203,384,128,384h42.667c11.797,0,21.333,9.557,21.333,21.333 S182.464,426.667,170.667,426.667z M384,426.667H234.667c-11.797,0-21.333-9.557-21.333-21.333S222.869,384,234.667,384H384 c11.797,0,21.333,9.557,21.333,21.333S395.797,426.667,384,426.667z M384,362.667H128c-11.797,0-21.333-9.557-21.333-21.333 c0-11.776,9.536-21.333,21.333-21.333h256c11.797,0,21.333,9.557,21.333,21.333C405.333,353.109,395.797,362.667,384,362.667z M405.333,277.333c0,11.776-9.536,21.333-21.333,21.333H256c-11.797,0-21.333-9.557-21.333-21.333V256 c0-27.968,13.696-52.587,34.539-68.16c-8.171-10.752-13.205-24-13.205-38.507c0-35.285,28.715-64,64-64s64,28.715,64,64 c0,14.507-5.035,27.755-13.205,38.507c20.843,15.573,34.539,40.192,34.539,68.16V277.333z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
      },
      {idProcess:2,
        title:"DO A TEST",
        decr:"Waiting a candidate sent back a test",
        button:"Pass a test",
        svg:<svg
        class="h-3 w-3"
          fill="#1e429f"
          height="200px"
          width="200px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 508 508"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M448.8,81.3L371.6,4.1c-2.6-2.6-6.2-4.1-10-4.1H69.2c-7.8,0-14.1,6.3-14.1,14.1v479.8c0,7.8,6.3,14.1,14.1,14.1h369.6 c7.8,0,14.1-6.3,14.1-14.1V91.3C452.9,87.5,451.4,83.9,448.8,81.3z M375.7,48.2l29,29h-29V48.2z M83.3,479.8V28.2h264.2v63 c0,7.8,6.3,14.1,14.1,14.1h63v374.5H83.3z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M385.5,138.1H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,144.4,393.3,138.1,385.5,138.1z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M385.5,271.3H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,277.6,393.3,271.3,385.5,271.3z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M385.5,404.6H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,410.9,393.3,404.6,385.5,404.6z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M189.1,104.8h-66.6c-7.8,0-14.1,6.3-14.1,14.1v66.6c0,7.8,6.3,14.1,14.1,14.1h66.6c7.8,0,14.1-6.3,14.1-14.1v-66.6 C203.2,111.1,196.9,104.8,189.1,104.8z M175,171.4h-38.4V133H175V171.4z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M189.1,238.1h-66.6c-7.8,0-14.1,6.3-14.1,14.1v66.6c0,7.8,6.3,14.1,14.1,14.1h66.6c7.8,0,14.1-6.3,14.1-14.1v-66.6 C203.2,244.4,196.9,238.1,189.1,238.1z M175,304.7h-38.4v-38.4H175V304.7z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M213.3,377.7c-5.6-5.5-14.5-5.5-20,0l-42.9,42.9l-17.8-17.8c-5.5-5.5-14.4-5.5-20,0c-5.5,5.5-5.5,14.4,0,20l27.8,27.8 c2.8,2.8,6.4,4.1,10,4.1c3.6,0,7.2-1.4,10-4.1l52.9-52.9C218.8,392.2,218.8,383.3,213.3,377.7z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>,
        svg1:<svg
        class="h-3 w-3"
          fill="#73737D"
          height="200px"
          width="200px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 508 508"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M448.8,81.3L371.6,4.1c-2.6-2.6-6.2-4.1-10-4.1H69.2c-7.8,0-14.1,6.3-14.1,14.1v479.8c0,7.8,6.3,14.1,14.1,14.1h369.6 c7.8,0,14.1-6.3,14.1-14.1V91.3C452.9,87.5,451.4,83.9,448.8,81.3z M375.7,48.2l29,29h-29V48.2z M83.3,479.8V28.2h264.2v63 c0,7.8,6.3,14.1,14.1,14.1h63v374.5H83.3z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M385.5,138.1H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,144.4,393.3,138.1,385.5,138.1z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M385.5,271.3H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,277.6,393.3,271.3,385.5,271.3z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M385.5,404.6H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,410.9,393.3,404.6,385.5,404.6z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M189.1,104.8h-66.6c-7.8,0-14.1,6.3-14.1,14.1v66.6c0,7.8,6.3,14.1,14.1,14.1h66.6c7.8,0,14.1-6.3,14.1-14.1v-66.6 C203.2,111.1,196.9,104.8,189.1,104.8z M175,171.4h-38.4V133H175V171.4z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M189.1,238.1h-66.6c-7.8,0-14.1,6.3-14.1,14.1v66.6c0,7.8,6.3,14.1,14.1,14.1h66.6c7.8,0,14.1-6.3,14.1-14.1v-66.6 C203.2,244.4,196.9,238.1,189.1,238.1z M175,304.7h-38.4v-38.4H175V304.7z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M213.3,377.7c-5.6-5.5-14.5-5.5-20,0l-42.9,42.9l-17.8-17.8c-5.5-5.5-14.4-5.5-20,0c-5.5,5.5-5.5,14.4,0,20l27.8,27.8 c2.8,2.8,6.4,4.1,10,4.1c3.6,0,7.2-1.4,10-4.1l52.9-52.9C218.8,392.2,218.8,383.3,213.3,377.7z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        },
        {idProcess:3,
          title:"DONE A TEST",
          decr:"A candidate was done a test and sent back via mail",
          button:"Send an interview invitation email",
          svg:<svg
          class="h-3 w-3"
            fill="#1e429f"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 508 508"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M448.8,81.3L371.6,4.1c-2.6-2.6-6.2-4.1-10-4.1H69.2c-7.8,0-14.1,6.3-14.1,14.1v479.8c0,7.8,6.3,14.1,14.1,14.1h369.6 c7.8,0,14.1-6.3,14.1-14.1V91.3C452.9,87.5,451.4,83.9,448.8,81.3z M375.7,48.2l29,29h-29V48.2z M83.3,479.8V28.2h264.2v63 c0,7.8,6.3,14.1,14.1,14.1h63v374.5H83.3z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M385.5,138.1H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,144.4,393.3,138.1,385.5,138.1z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M385.5,271.3H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,277.6,393.3,271.3,385.5,271.3z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M385.5,404.6H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,410.9,393.3,404.6,385.5,404.6z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M189.1,104.8h-66.6c-7.8,0-14.1,6.3-14.1,14.1v66.6c0,7.8,6.3,14.1,14.1,14.1h66.6c7.8,0,14.1-6.3,14.1-14.1v-66.6 C203.2,111.1,196.9,104.8,189.1,104.8z M175,171.4h-38.4V133H175V171.4z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M189.1,238.1h-66.6c-7.8,0-14.1,6.3-14.1,14.1v66.6c0,7.8,6.3,14.1,14.1,14.1h66.6c7.8,0,14.1-6.3,14.1-14.1v-66.6 C203.2,244.4,196.9,238.1,189.1,238.1z M175,304.7h-38.4v-38.4H175V304.7z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M213.3,377.7c-5.6-5.5-14.5-5.5-20,0l-42.9,42.9l-17.8-17.8c-5.5-5.5-14.4-5.5-20,0c-5.5,5.5-5.5,14.4,0,20l27.8,27.8 c2.8,2.8,6.4,4.1,10,4.1c3.6,0,7.2-1.4,10-4.1l52.9-52.9C218.8,392.2,218.8,383.3,213.3,377.7z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>,
          svg1:<svg
          class="h-3 w-3"
            fill="#73737D"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 508 508"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M448.8,81.3L371.6,4.1c-2.6-2.6-6.2-4.1-10-4.1H69.2c-7.8,0-14.1,6.3-14.1,14.1v479.8c0,7.8,6.3,14.1,14.1,14.1h369.6 c7.8,0,14.1-6.3,14.1-14.1V91.3C452.9,87.5,451.4,83.9,448.8,81.3z M375.7,48.2l29,29h-29V48.2z M83.3,479.8V28.2h264.2v63 c0,7.8,6.3,14.1,14.1,14.1h63v374.5H83.3z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M385.5,138.1H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,144.4,393.3,138.1,385.5,138.1z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M385.5,271.3H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,277.6,393.3,271.3,385.5,271.3z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M385.5,404.6H234.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h150.9c7.8,0,14.1-6.3,14.1-14.1 C399.6,410.9,393.3,404.6,385.5,404.6z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M189.1,104.8h-66.6c-7.8,0-14.1,6.3-14.1,14.1v66.6c0,7.8,6.3,14.1,14.1,14.1h66.6c7.8,0,14.1-6.3,14.1-14.1v-66.6 C203.2,111.1,196.9,104.8,189.1,104.8z M175,171.4h-38.4V133H175V171.4z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M189.1,238.1h-66.6c-7.8,0-14.1,6.3-14.1,14.1v66.6c0,7.8,6.3,14.1,14.1,14.1h66.6c7.8,0,14.1-6.3,14.1-14.1v-66.6 C203.2,244.4,196.9,238.1,189.1,238.1z M175,304.7h-38.4v-38.4H175V304.7z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M213.3,377.7c-5.6-5.5-14.5-5.5-20,0l-42.9,42.9l-17.8-17.8c-5.5-5.5-14.4-5.5-20,0c-5.5,5.5-5.5,14.4,0,20l27.8,27.8 c2.8,2.8,6.4,4.1,10,4.1c3.6,0,7.2-1.4,10-4.1l52.9-52.9C218.8,392.2,218.8,383.3,213.3,377.7z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          },
          {idProcess:4,
            title:"AWAITING INTERVIEW",
            decr:"Waitting canndidate accept an interview ",
            button:"Candidate accept interview",
            svg: <svg
            class="w-4 h-4"
            fill="#000000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#1e429f"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M15.3568437,15 C15.7646155,15.4524132 16,16.046195 16,16.6740273 L16,18.5 C16,19.8807119 14.8807119,21 13.5,21 L4.5,21 C3.11928813,21 2,19.8807119 2,18.5 L2,16.6741582 C2,16.0462625 2.23543163,15.4524277 2.64327433,15 L2.5,15 C2.22385763,15 2,14.7761424 2,14.5 C2,14.2238576 2.22385763,14 2.5,14 L4.16159469,14 L6.20372283,12.860218 C5.46099525,12.1339918 5,11.1208315 5,10 C5,7.790861 6.790861,6 9,6 C11.209139,6 13,7.790861 13,10 C13,10.0851511 12.9973393,10.1696808 12.9920965,10.2535104 L13.5294677,9.70238819 C13.1955521,9.21872477 13,8.6321992 13,8 C13,6.34314575 14.3431458,5 16,5 C17.6568542,5 19,6.34314575 19,8 C19,8.63142186 18.8049285,9.21728235 18.4717634,9.70060362 L18.4756434,9.70454496 L20.2910569,11.5687647 C20.7456276,12.0355563 21,12.6613719 21,13.3129308 L21,14 L21.5,14 C21.7761424,14 22,14.2238576 22,14.5 C22,14.7761424 21.7761424,15 21.5,15 L15.3568437,15 L15.3568437,15 Z M13.8388411,14 L20,14 L20,13.3129308 C20,12.9219955 19.8473766,12.5465061 19.5746341,12.2664311 L17.7752165,10.4186373 C17.2781336,10.7840978 16.6642801,11 16,11 C15.3364952,11 14.7232995,10.7846015 14.2265245,10.4199164 L12.4260261,12.2664886 C12.2161243,12.4817616 12.1876639,12.5119114 12.1322325,12.5816619 C12.0367817,12.7017697 12.0030449,12.7911346 12.0001997,12.9735561 L13.8388411,14 Z M13.2430272,14.8126554 L10.9146921,13.5128341 C10.3460214,13.8234492 9.6936285,14 9,14 C8.30657563,14 7.65436264,13.8235531 7.08580996,13.5131083 L3.76895585,15.3643588 C3.29420285,15.6293348 3,16.1304646 3,16.6741582 L3,18.5 C3,19.3284271 3.67157288,20 4.5,20 L13.5,20 C14.3284271,20 15,19.3284271 15,18.5 L15,16.6740273 C15,16.130386 14.7058532,15.6292958 14.2311717,15.3642991 L13.5719516,14.9962814 C13.4392535,14.9800633 13.3226161,14.9118587 13.2430272,14.8126554 L13.2430272,14.8126554 Z M9,13 C10.6568542,13 12,11.6568542 12,10 C12,8.34314575 10.6568542,7 9,7 C7.34314575,7 6,8.34314575 6,10 C6,11.6568542 7.34314575,13 9,13 Z M16,10 C17.1045695,10 18,9.1045695 18,8 C18,6.8954305 17.1045695,6 16,6 C14.8954305,6 14,6.8954305 14,8 C14,9.1045695 14.8954305,10 16,10 Z"></path>{" "}
            </g>
          </svg>,
          svg1:<svg
          class="w-4 h-4"
          fill="#73737d"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#C9C9CA"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M15.3568437,15 C15.7646155,15.4524132 16,16.046195 16,16.6740273 L16,18.5 C16,19.8807119 14.8807119,21 13.5,21 L4.5,21 C3.11928813,21 2,19.8807119 2,18.5 L2,16.6741582 C2,16.0462625 2.23543163,15.4524277 2.64327433,15 L2.5,15 C2.22385763,15 2,14.7761424 2,14.5 C2,14.2238576 2.22385763,14 2.5,14 L4.16159469,14 L6.20372283,12.860218 C5.46099525,12.1339918 5,11.1208315 5,10 C5,7.790861 6.790861,6 9,6 C11.209139,6 13,7.790861 13,10 C13,10.0851511 12.9973393,10.1696808 12.9920965,10.2535104 L13.5294677,9.70238819 C13.1955521,9.21872477 13,8.6321992 13,8 C13,6.34314575 14.3431458,5 16,5 C17.6568542,5 19,6.34314575 19,8 C19,8.63142186 18.8049285,9.21728235 18.4717634,9.70060362 L18.4756434,9.70454496 L20.2910569,11.5687647 C20.7456276,12.0355563 21,12.6613719 21,13.3129308 L21,14 L21.5,14 C21.7761424,14 22,14.2238576 22,14.5 C22,14.7761424 21.7761424,15 21.5,15 L15.3568437,15 L15.3568437,15 Z M13.8388411,14 L20,14 L20,13.3129308 C20,12.9219955 19.8473766,12.5465061 19.5746341,12.2664311 L17.7752165,10.4186373 C17.2781336,10.7840978 16.6642801,11 16,11 C15.3364952,11 14.7232995,10.7846015 14.2265245,10.4199164 L12.4260261,12.2664886 C12.2161243,12.4817616 12.1876639,12.5119114 12.1322325,12.5816619 C12.0367817,12.7017697 12.0030449,12.7911346 12.0001997,12.9735561 L13.8388411,14 Z M13.2430272,14.8126554 L10.9146921,13.5128341 C10.3460214,13.8234492 9.6936285,14 9,14 C8.30657563,14 7.65436264,13.8235531 7.08580996,13.5131083 L3.76895585,15.3643588 C3.29420285,15.6293348 3,16.1304646 3,16.6741582 L3,18.5 C3,19.3284271 3.67157288,20 4.5,20 L13.5,20 C14.3284271,20 15,19.3284271 15,18.5 L15,16.6740273 C15,16.130386 14.7058532,15.6292958 14.2311717,15.3642991 L13.5719516,14.9962814 C13.4392535,14.9800633 13.3226161,14.9118587 13.2430272,14.8126554 L13.2430272,14.8126554 Z M9,13 C10.6568542,13 12,11.6568542 12,10 C12,8.34314575 10.6568542,7 9,7 C7.34314575,7 6,8.34314575 6,10 C6,11.6568542 7.34314575,13 9,13 Z M16,10 C17.1045695,10 18,9.1045695 18,8 C18,6.8954305 17.1045695,6 16,6 C14.8954305,6 14,6.8954305 14,8 C14,9.1045695 14.8954305,10 16,10 Z"></path>{" "}
          </g>
        </svg>
            },
            {idProcess:5,
              title:"INTERVIEW",
              decr:"Interview candidate",
              button:"Candidate was passed the interview & Send offer job via mail",
              svg:<svg
              class="w-4 h-4"
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#1e429f"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M15.3568437,15 C15.7646155,15.4524132 16,16.046195 16,16.6740273 L16,18.5 C16,19.8807119 14.8807119,21 13.5,21 L4.5,21 C3.11928813,21 2,19.8807119 2,18.5 L2,16.6741582 C2,16.0462625 2.23543163,15.4524277 2.64327433,15 L2.5,15 C2.22385763,15 2,14.7761424 2,14.5 C2,14.2238576 2.22385763,14 2.5,14 L4.16159469,14 L6.20372283,12.860218 C5.46099525,12.1339918 5,11.1208315 5,10 C5,7.790861 6.790861,6 9,6 C11.209139,6 13,7.790861 13,10 C13,10.0851511 12.9973393,10.1696808 12.9920965,10.2535104 L13.5294677,9.70238819 C13.1955521,9.21872477 13,8.6321992 13,8 C13,6.34314575 14.3431458,5 16,5 C17.6568542,5 19,6.34314575 19,8 C19,8.63142186 18.8049285,9.21728235 18.4717634,9.70060362 L18.4756434,9.70454496 L20.2910569,11.5687647 C20.7456276,12.0355563 21,12.6613719 21,13.3129308 L21,14 L21.5,14 C21.7761424,14 22,14.2238576 22,14.5 C22,14.7761424 21.7761424,15 21.5,15 L15.3568437,15 L15.3568437,15 Z M13.8388411,14 L20,14 L20,13.3129308 C20,12.9219955 19.8473766,12.5465061 19.5746341,12.2664311 L17.7752165,10.4186373 C17.2781336,10.7840978 16.6642801,11 16,11 C15.3364952,11 14.7232995,10.7846015 14.2265245,10.4199164 L12.4260261,12.2664886 C12.2161243,12.4817616 12.1876639,12.5119114 12.1322325,12.5816619 C12.0367817,12.7017697 12.0030449,12.7911346 12.0001997,12.9735561 L13.8388411,14 Z M13.2430272,14.8126554 L10.9146921,13.5128341 C10.3460214,13.8234492 9.6936285,14 9,14 C8.30657563,14 7.65436264,13.8235531 7.08580996,13.5131083 L3.76895585,15.3643588 C3.29420285,15.6293348 3,16.1304646 3,16.6741582 L3,18.5 C3,19.3284271 3.67157288,20 4.5,20 L13.5,20 C14.3284271,20 15,19.3284271 15,18.5 L15,16.6740273 C15,16.130386 14.7058532,15.6292958 14.2311717,15.3642991 L13.5719516,14.9962814 C13.4392535,14.9800633 13.3226161,14.9118587 13.2430272,14.8126554 L13.2430272,14.8126554 Z M9,13 C10.6568542,13 12,11.6568542 12,10 C12,8.34314575 10.6568542,7 9,7 C7.34314575,7 6,8.34314575 6,10 C6,11.6568542 7.34314575,13 9,13 Z M16,10 C17.1045695,10 18,9.1045695 18,8 C18,6.8954305 17.1045695,6 16,6 C14.8954305,6 14,6.8954305 14,8 C14,9.1045695 14.8954305,10 16,10 Z"></path>{" "}
              </g>
            </svg>,
            svg1:<svg
            class="w-4 h-4"
            fill="#73737d"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#C9C9CA"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M15.3568437,15 C15.7646155,15.4524132 16,16.046195 16,16.6740273 L16,18.5 C16,19.8807119 14.8807119,21 13.5,21 L4.5,21 C3.11928813,21 2,19.8807119 2,18.5 L2,16.6741582 C2,16.0462625 2.23543163,15.4524277 2.64327433,15 L2.5,15 C2.22385763,15 2,14.7761424 2,14.5 C2,14.2238576 2.22385763,14 2.5,14 L4.16159469,14 L6.20372283,12.860218 C5.46099525,12.1339918 5,11.1208315 5,10 C5,7.790861 6.790861,6 9,6 C11.209139,6 13,7.790861 13,10 C13,10.0851511 12.9973393,10.1696808 12.9920965,10.2535104 L13.5294677,9.70238819 C13.1955521,9.21872477 13,8.6321992 13,8 C13,6.34314575 14.3431458,5 16,5 C17.6568542,5 19,6.34314575 19,8 C19,8.63142186 18.8049285,9.21728235 18.4717634,9.70060362 L18.4756434,9.70454496 L20.2910569,11.5687647 C20.7456276,12.0355563 21,12.6613719 21,13.3129308 L21,14 L21.5,14 C21.7761424,14 22,14.2238576 22,14.5 C22,14.7761424 21.7761424,15 21.5,15 L15.3568437,15 L15.3568437,15 Z M13.8388411,14 L20,14 L20,13.3129308 C20,12.9219955 19.8473766,12.5465061 19.5746341,12.2664311 L17.7752165,10.4186373 C17.2781336,10.7840978 16.6642801,11 16,11 C15.3364952,11 14.7232995,10.7846015 14.2265245,10.4199164 L12.4260261,12.2664886 C12.2161243,12.4817616 12.1876639,12.5119114 12.1322325,12.5816619 C12.0367817,12.7017697 12.0030449,12.7911346 12.0001997,12.9735561 L13.8388411,14 Z M13.2430272,14.8126554 L10.9146921,13.5128341 C10.3460214,13.8234492 9.6936285,14 9,14 C8.30657563,14 7.65436264,13.8235531 7.08580996,13.5131083 L3.76895585,15.3643588 C3.29420285,15.6293348 3,16.1304646 3,16.6741582 L3,18.5 C3,19.3284271 3.67157288,20 4.5,20 L13.5,20 C14.3284271,20 15,19.3284271 15,18.5 L15,16.6740273 C15,16.130386 14.7058532,15.6292958 14.2311717,15.3642991 L13.5719516,14.9962814 C13.4392535,14.9800633 13.3226161,14.9118587 13.2430272,14.8126554 L13.2430272,14.8126554 Z M9,13 C10.6568542,13 12,11.6568542 12,10 C12,8.34314575 10.6568542,7 9,7 C7.34314575,7 6,8.34314575 6,10 C6,11.6568542 7.34314575,13 9,13 Z M16,10 C17.1045695,10 18,9.1045695 18,8 C18,6.8954305 17.1045695,6 16,6 C14.8954305,6 14,6.8954305 14,8 C14,9.1045695 14.8954305,10 16,10 Z"></path>{" "}
            </g>
          </svg>
              },
              {idProcess:6,
                title:"JOB OFFER",
                decr:"Waiting candidate to accept the job offer",
                button:"A candidate accept job offer",
                svg:<svg
                class="h-4 w-4"
                version="1.1"
                id="Uploaded to svgrepo.com"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                xml:space="preserve"
                fill="#000000"
                stroke="#1e429f"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <style type="text/css"></style>{" "}
                  <path
                    class="bentblocks_een"
                    d="M26,8h-5V6c0-1.1-0.9-2-2-2h-6c-1.1,0-2,0.9-2,2v2H6c-1.1,0-2,0.9-2,2v16c0,1.1,0.9,2,2,2h20 c1.1,0,2-0.9,2-2V10C28,8.9,27.1,8,26,8z M13,6h6v2h-6V6z M17,10v6h-2v-6H17z M26,26H6v-3h20V26z M26,21H6V10h7v6c0,1.1,0.9,2,2,2h2 c1.1,0,2-0.9,2-2v-6h7V21z"
                  ></path>{" "}
                </g>
              </svg>,
              svg1:<svg
              class="h-4 w-4"
              version="1.1"
              id="Uploaded to svgrepo.com"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              xml:space="preserve"
              fill="#73737d"
              stroke="#C9C9CA"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <style type="text/css"></style>{" "}
                <path
                  class="bentblocks_een"
                  d="M26,8h-5V6c0-1.1-0.9-2-2-2h-6c-1.1,0-2,0.9-2,2v2H6c-1.1,0-2,0.9-2,2v16c0,1.1,0.9,2,2,2h20 c1.1,0,2-0.9,2-2V10C28,8.9,27.1,8,26,8z M13,6h6v2h-6V6z M17,10v6h-2v-6H17z M26,26H6v-3h20V26z M26,21H6V10h7v6c0,1.1,0.9,2,2,2h2 c1.1,0,2-0.9,2-2v-6h7V21z"
                ></path>{" "}
              </g>
            </svg>
                },
                { idProcess:7,
                  title:"OBOARDING",
                  svg:<svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#1e429f"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6"
                      stroke="#33363F"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z"
                      fill="#33363F"
                    ></path>{" "}
                  </g>
                </svg>,
                svg1:<svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="#E6E6E6"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#E6E6E6"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6"
                    stroke="#73737d"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z"
                    fill="#33363F"
                  ></path>{" "}
                </g>
              </svg>
                }


  ]
  export default renderData