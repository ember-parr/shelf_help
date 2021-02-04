import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import "../Styles/Login.css";

const Register = () => {
    const { register } = useContext(UserProfileContext);
    const [loading, setLoading] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirm) {
        toast.error("Passwords do not match");
        return;
        }

        setLoading(true);
        const profile = {
        displayName,
        email,
        zipCode,
        phoneNumber
        };
        register(profile, password)
        .then((user) => {
            setLoading(false);
            toast.info(`Welcome ${user.displayName}`);
            history.push("/");
        })
        .catch((err) => {
            setLoading(false);
            toast.error("Invalid email");
        });
    };

    return (
        <div className="login-form">
        <form onSubmit={handleSubmit}>
        <div className="avatar bg-info">
            <img src="./images/simple-logo.png" alt="Shelf Help Icon" />
            </div>
            <h2 className="text-center">New User Registration</h2>
            <div className="form-group">
            
            </div>
            <div className="form-group">
            
            </div>
            <div className="form-group">
            <Input
                onChange={(e) => setDisplayName(e.target.value)}
                type="text"
                className="form-control"
                name="displayName"
                placeholder="Display Name"
                required="required"
            />
            </div>

            <div className="form-group">
            <Input
                onChange={(e) => setZipCode(e.target.value)}
                type="text"
                className="form-control"
                name="zipCode"
                placeholder="Zip Code"
                required="required"
            />
            </div>

            <div className="form-group">
            <Input
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                className="form-control"
                name="phoneNumber"
                placeholder="Phone Number"
            />
            </div>


            <div className="form-group">
            <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
            />
            </div>
            <div className="form-group">
            <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
            />
            </div>
            <div className="form-group">
            <Input
                onChange={(e) => setConfirm(e.target.value)}
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm Password"
                required="required"
            />
            </div>
            <div className="form-group">
            <Button type="submit" block color="primary" disabled={loading}>
                Sign Up
            </Button>
            </div>
            <div className="text-center small">
            Already have an account?
            <div>
                <Link to="/login">Log in here</Link>
            </div>
            </div>
        </form>
        </div>
    );
};

export default Register;