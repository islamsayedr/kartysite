export function LikeLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        d="M12 21.5C10.6588 21.5 9.88572 20.9278 8.33953 19.7834C0.22172 13.7749 1.01807 6.65294 4.53744 4.49415C7.21909 2.84923 9.55962 3.51211 10.9656 4.56801C11.5422 5.00096 11.8304 5.21743 12 5.21743C12.1696 5.21743 12.4578 5.00096 13.0344 4.56801C14.4404 3.51211 16.7809 2.84923 19.4626 4.49415C21.1812 5.54838 22.2505 7.78623 21.9494 10.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 17.5H22M18 13.5V21.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
    </svg>
  );
}

export function LikeFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        d="M19.8551 3.85515C16.8741 2.02662 14.1999 2.75537 12.5844 3.96861C12.3186 4.1682 12.1362 4.3048 12.0004 4.39704C11.8646 4.3048 11.6822 4.1682 11.4164 3.96861C9.80088 2.75537 7.12665 2.02662 4.14567 3.85515C2.08443 5.11952 0.924601 7.7606 1.33158 10.7951C1.74053 13.8443 3.71412 17.2929 7.89372 20.3865C9.34509 21.4614 10.4103 22.2503 12.0004 22.2503C13.5904 22.2503 14.6557 21.4614 16.1071 20.3865C20.2867 17.2929 22.2602 13.8443 22.6692 10.7951C23.0762 7.7606 21.9163 5.11952 19.8551 3.85515Z"
        fill="url(#paint1_linear_2_101)"
      />
      <linearGradient
        id="paint0_linear_2_101"
        x1="12"
        y1="3.5"
        x2="12"
        y2="21.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9F1239" />
        <stop offset="1" stopColor="#5B21B6" />
      </linearGradient>
    </svg>
  );
}
