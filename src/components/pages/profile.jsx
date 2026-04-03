import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HistoryIcon from '@mui/icons-material/History';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityIcon from '@mui/icons-material/Security';
import EmailIcon from '@mui/icons-material/Email';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        setLoading(false);
        return;
      }

      const userData = JSON.parse(storedUser);
      const id = userData._id;

      try {
        const res = await axios.get(`https://elon-backend-1111.onrender.com/api/auth/profile/${id}`);
        setUser(res.data.user);
        setNewName(res.data.user.name);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("name", newName);
      formData.append("email", user.email);
      if (imgFile) {
        formData.append("profilePic", imgFile);
      }

      const res = await axios.put(`https://elon-backend-1111.onrender.com/api/auth/update-profile/${user._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setEditMode(false);
      setImgFile(null);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    } finally {
      setUploading(false);
    }
  };

  const handleLogout = async () => {
    try {
      if (window.confirm("Are you sure you want to log out?")) {
        await axios.post("https://elon-backend-1111.onrender.com/api/auth/logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <Typography variant="h6" className="font-serif animate-pulse text-gray-500">Loading Profile...</Typography>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] bg-gray-50 px-6 text-center">
        <div className="text-6xl mb-4">🔐</div>
        <Typography variant="h4" className="font-serif font-bold text-gray-800 mb-4">Access Denied</Typography>
        <Typography className="text-gray-500 mb-8 max-w-md">You are not currently logged in. Please sign in to view your account details and order history.</Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate("/login")}
          sx={{ backgroundColor: 'black', color: 'white', padding: '12px 36px', '&:hover': { backgroundColor: '#333' } }}
        >
          Sign In
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* PROFILE HERO HEADER */}
        <div className="bg-white border border-gray-100 rounded-[40px] p-8 md:p-14 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row items-center md:items-center gap-10 relative overflow-hidden">
          {/* Decorative BG element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gray-50 rounded-full"></div>

          <div className="flex-shrink-0 relative group z-10">
             <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white ring-8 ring-gray-50/50 border-4 border-white shadow-2xl shadow-gray-300/50 flex items-center justify-center text-gray-200 overflow-hidden relative aspect-square">
                {user.profilePic ? (
                  <img src={`https://elon-backend-1111.onrender.com/uploads/${user.profilePic}`} alt="Profile" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <AccountCircleIcon style={{ fontSize: 160 }} />
                )}
                {/* Always show overlay if in edit mode, or show on hover normally for UX */}
                <div 
                  className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 rounded-full ${editMode ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'}`}
                  onClick={() => document.getElementById("profilePicInput").click()}
                >
                  <CameraAltIcon className="text-white mb-2" sx={{ fontSize: 32 }} />
                  <Typography className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Update</Typography>
                </div>
             </div>
             <input 
               type="file" 
               id="profilePicInput" 
               className="hidden" 
               accept="image/*" 
               onChange={(e) => setImgFile(e.target.files[0])}
             />
             {imgFile && (
               <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                  <span className="bg-blue-600 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">New Photo Selected</span>
               </div>
             )}
          </div>

          <div className="flex-grow text-center md:text-left flex flex-col justify-center w-full z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 w-full">
               <div>
                  <Typography className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black mb-3">Customer ID: {user._id?.slice(-8).toUpperCase()}</Typography>
                  {editMode ? (
                    <input 
                      autoFocus
                      className="text-4xl md:text-6xl font-serif text-gray-900 border-b-4 border-black bg-transparent outline-none py-1 mb-2 font-bold w-full max-w-lg"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Username"
                    />
                  ) : (
                    <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-2 font-black capitalize tracking-tight">
                      {user.name}
                    </h1>
                  )}
                  <p className="text-gray-400 text-xl font-medium tracking-wide">{user.email}</p>
               </div>
               
               <div className="flex gap-3 justify-center md:justify-end">
                {editMode ? (
                   <Button 
                   variant="contained" 
                   onClick={handleUpdateProfile}
                   disabled={uploading}
                   sx={{ backgroundColor: 'black', color: 'white', border: '1px solid black', padding: '12px 36px', borderRadius: '12px', '&:hover': { backgroundColor: '#222' } }}
                 >
                   {uploading ? "Saving..." : "Save Profile"}
                 </Button>
                ) : (
                  <Button 
                    variant="outlined"
                    onClick={() => setEditMode(true)}
                    sx={{ borderColor: 'gray-200', color: 'black', padding: '12px 32px', borderRadius: '12px', textTransform: 'none', fontWeight: 'bold' }}
                  >
                    Edit Info
                  </Button>
                )}
               </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
                <div className="px-6 py-4 bg-white/50 backdrop-blur rounded-2xl border border-gray-100 flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <div>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Profile Status</p>
                      <p className="font-bold text-gray-800 text-sm">Verified Member</p>
                   </div>
                </div>
                <div className="px-6 py-4 bg-white/50 backdrop-blur rounded-2xl border border-gray-100 flex items-center gap-4">
                   <HistoryIcon className="text-gray-300" />
                   <div>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Joined On</p>
                      <p className="font-bold text-gray-800 text-sm">April 2026</p>
                   </div>
                </div>
            </div>
          </div>
          
        </div>

        {/* ACCOUNT SERVICES SECTION */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Account Column */}
          <div className="flex flex-col gap-8">
            <Typography variant="h6" className="font-serif font-black text-gray-900 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-black"></span> MY ACTIVITY
            </Typography>
            <div className="flex flex-col gap-3">
              {[
                { icon: <HistoryIcon />, title: "Order History", desc: "Track, return or buy things again" },
                { icon: <LocationOnIcon />, title: "Saved Addresses", desc: "Manage your delivery locations" },
                { icon: <SecurityIcon />, title: "Privacy & Security", desc: "Change password and account settings" }
              ].map((item, index) => (
                <div key={index} className="group bg-white border border-gray-50 p-6 rounded-[24px] flex items-center justify-between hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 leading-tight tracking-tight">{item.title}</p>
                      <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="text-gray-200 group-hover:text-black transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-8">
             <Typography variant="h6" className="font-serif font-black text-gray-900 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-black"></span> GET HELP
            </Typography>
            <div className="flex flex-col gap-3">
              {[
                { icon: <HelpOutlineIcon />, title: "Help Center", desc: "FAQs, shipping & return policies" },
                { icon: <EmailIcon />, title: "Contact Us", desc: "24/7 dedicated support team" }
              ].map((item, index) => (
                <div key={index} className="group bg-white border border-gray-50 p-6 rounded-[24px] flex items-center justify-between hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 leading-tight tracking-tight">{item.title}</p>
                      <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRightIcon className="text-gray-200 group-hover:text-black transition-colors" />
                </div>
              ))}
              
              {/* Promo Card */}
              <div className="mt-2 p-8 bg-black rounded-[32px] text-white relative overflow-hidden group">
                 <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-2">Member Rewards</p>
                    <p className="text-xl font-serif italic mb-6 leading-relaxed">"Unlock free premium gift wrapping on orders over ₹10,000."</p>
                    <button className="bg-white text-black text-[10px] uppercase tracking-widest font-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">Apply Benefits</button>
                 </div>
                 <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gray-800/50 rounded-full blur-3xl group-hover:bg-gray-400/20 transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* LOGOUT AT THE VERY BOTTOM */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col items-center">
            <Typography className="text-xs text-gray-400 uppercase font-black tracking-[0.3em] mb-6">Elon Couture v2.0</Typography>
            <Button 
                variant="contained" 
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
                sx={{ 
                    backgroundColor: '#fff', 
                    color: '#ef4444', 
                    border: '1px solid #fee2e2',
                    padding: '16px 64px', 
                    borderRadius: '20px', 
                    boxShadow: 'none', 
                    fontWeight: '900',
                    letterSpacing: '0.1em',
                    '&:hover': { backgroundColor: '#fee2e2', boxShadow: 'none', border: '1px solid #fca5a5' } 
                }}
            >
                LOGOUT ACCOUNT
            </Button>
            <Typography className="text-[10px] text-gray-300 mt-6 font-medium">Privacy Policy • Terms of Service • Cookies</Typography>
        </div>

      </div>
    </div>
  );
};

export default Profile;
