import { Address, Email, Phone, LinkGo } from "../atoms/icons";

export function MyAddress({
  address = "",
  color = "var(--main)",
  icon = "none",
}) {
  return (
    <div className="w-full flex items-start gap-2">
      {icon === "line" && <Address />}
      <span className="flex-1 text-[var(--b60)] font-medium text-[14px]">
        {address}
      </span>
      <a
        target="_blank"
        href={
          address !== ""
            ? `https://www.google.com/maps/search/?api=1&query=${address}`
            : ""
        }
      >
        <LinkGo stroke={color} />
      </a>
    </div>
  );
}

export function MyEmail({ email = "", color = "var(--main)", icon = "none" }) {
  return (
    <div className="w-full flex items-start gap-2">
      {icon === "line" && <Email />}
      <div className="flex-1">
        <span
          className=" text-[var(--b60)] text-wrap  whitespace-normal break-words"
          style={{ whiteSpace: "normal", wordBreak: "break-word" }}
        >
          {email}
        </span>
      </div>
      <a href={email !== "" ? `mailto:${email}` : ""} target="_blank">
        <LinkGo stroke={color} />
      </a>
    </div>
  );
}

export function MyPhone({ phone = "", color = "var(--main)", icon = "none" }) {
  return (
    <div className="w-full flex items-start gap-2">
      {icon === "line" && <Phone />}
      <span className="flex-1 text-[var(--b60)] font-medium text-[14px]">
        {phone}
      </span>
      <a href={phone !== "" ? `tel:${phone}` : ""} target="_blank">
        <LinkGo stroke={color} />
      </a>
    </div>
  );
}
