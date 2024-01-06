import { StarIcon, InboxIcon } from "@heroicons/react/24/outline";

export const messagesdata = [
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    Name: "Sara Porter",
    time: "12:48",
    Mesg: "No problem! They are a bit messy at the moment.I'm just going to tidy them up a bit.i'll upload them shortly",
    m: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    Name: "Samantha Ramos",
    time: "12:52",
    Mesg: "Did anyone take a photo of the drawing we made on the whiteboard? I'd like made a high fidelity version of that concept",
    m: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    Name: "Tiffany Myres",
    time: "12:51",
    Mesg: "yep!i put a few photoss in the shared folder. Let me know if you have any questions:)",
    m: "@samantharamos",
  },
];

export const sidebarnavigation = [
  { name: "Inbox", href: "#", icon: InboxIcon, current: false },
  { name: "Starred", href: "#", icon: StarIcon, current: false },
];
export const Channelsdata = [
  { name: "Design", href: "#", current: true },
  { name: "Engineering", href: "#", current: false },
  { name: "Marketing", href: "#", current: false },
  { name: "Support", href: "#", current: false },
  { name: "Sales", href: "#", current: false },
];
