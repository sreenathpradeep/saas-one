import Link from "next/link";

const ButtonLogin = (props) => {
  //destructuring props
  const { isLoggedIn, name } = props;

  if (props.isLoggedIn) {
    return <Link className = "btn btn-primary" href="/dashboard">Welcome back {name}</Link>;
  }
  return <Link href="/login">Login</Link>;
};

export default ButtonLogin;
