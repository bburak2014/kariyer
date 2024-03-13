
import { Link } from "react-router-dom";
import "./Login.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
    {/* login Formu */ }

    const navigate = useNavigate()
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        //  asenkron bir post işlemidir.burada username ve mail stateleri ile sorgu yapılır ve
        //  dönen response token localsrotrage e kaydedilir ve 500 ms sonra success page e gönderilir
        try {
            const result = await axios.post('https://dummyjson.com/auth/login', {
                username: mail,
                password: password,
            });

            localStorage.setItem("token", result?.data?.token)
            setTimeout(() => {
                navigate("/success")
            }, 500);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // bu fonksiyon formun default halini devre dısına cıkarır ve handlelogin fonk çalıştırır
    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleLogin()
    }

    return (
        <div className='login-main-form' >
            <form className="login-form-box" onSubmit={handleSubmit}>
                <h2 className="text-[32px] font-semibold">Aday Üye Girişi</h2>

                {/* Social Linkler */}
                <div className="flex gap-6 justify-between ">
                    <Link to="#" className="login-social-link ">
                        <img src="https://aday-spage.mncdn.com/Knet_img_google-icon.1a951fd.png?v=69136" width={18} alt="google" />
                        <span>Google</span>
                    </Link>
                    <Link to="#" className="login-social-link  ">
                        <img src="https://aday-spage.mncdn.com/Knet_img_facebook-icon-middle.1ce9951.png?v=69136" width={18} alt="google" />
                        <span>FaceBook</span>
                    </Link>
                    <Link to="#" className="login-social-link   ">
                        <img src="https://aday-spage.mncdn.com/Knet_img_apple-black-logo.699c654.png?v=69136" width={18} alt="google" />
                        <span>Apple</span>
                    </Link>

                </div>

                <div className="separator">veya</div>
                <input className="form-input" type="text" placeholder="Kullanıcı adı veya E-posta" value={mail} onChange={(e) => setMail(e.target.value)} required />
                <input className="form-input" type="password" placeholder="Şifre" value={password}  onChange={(e) => setPassword(e.target.value)} required />
                
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" />
                        <label>Beni Hatırla</label>

                    </div>
                    <Link to="#" className="text-purple-button" >Şifremi Unuttum</Link>
                </div>
                <button type="submit" className="button-submit">Giriş Yap</button>
                <div>
                    Kariyer.net’te özgeçmişin yok mu? <Link className="text-purple-button " to="#"> Hemen Üye Ol</Link> <Link className="text-purple-button " to="#"> İşveren misin?</Link>
                </div>
                <img src="reklam.jpg" alt="reklam" height={100} />
            </form>

        </div>
    );
};

export default LoginForm;