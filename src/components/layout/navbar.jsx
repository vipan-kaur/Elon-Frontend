import AdminNavbar from "./adminnavbar";
import UserNavbar from "./usernavbar";




const Navbar= ()=>{
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {user?.role === "admin" ? (
        <AdminNavbar />
      ) : (
        <UserNavbar />
      )}
    </>
  );
}
export default Navbar