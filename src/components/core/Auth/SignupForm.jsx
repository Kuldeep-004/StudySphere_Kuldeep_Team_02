import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"

import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import Tab from "../../common/Tab"

function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }

    dispatch(setSignupData(signupData))
    dispatch(sendOtp(formData.email, navigate))

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT)
  }

  return (
    <div className="space-y-6">
      {/* Account Type Selection */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setAccountType(ACCOUNT_TYPE.STUDENT)}
          className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
            accountType === ACCOUNT_TYPE.STUDENT
              ? "bg-[#4b9cff] text-white"
              : "bg-[#242424] text-[#8f9095] hover:bg-[#2a2a2a]"
          }`}
        >
          Student
        </button>
        <button
          type="button"
          onClick={() => setAccountType(ACCOUNT_TYPE.INSTRUCTOR)}
          className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-colors ${
            accountType === ACCOUNT_TYPE.INSTRUCTOR
              ? "bg-[#4b9cff] text-white"
              : "bg-[#242424] text-[#8f9095] hover:bg-[#2a2a2a]"
          }`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#e5e7eb] mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="w-full px-3 py-2 bg-[#242424] border border-[#2a2a2a] rounded-lg text-white placeholder-[#8f9095] focus:outline-none focus:ring-2 focus:ring-[#4b9cff] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#e5e7eb] mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="w-full px-3 py-2 bg-[#242424] border border-[#2a2a2a] rounded-lg text-white placeholder-[#8f9095] focus:outline-none focus:ring-2 focus:ring-[#4b9cff] focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#e5e7eb] mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter your email address"
            className="w-full px-3 py-2 bg-[#242424] border border-[#2a2a2a] rounded-lg text-white placeholder-[#8f9095] focus:outline-none focus:ring-2 focus:ring-[#4b9cff] focus:border-transparent"
          />
        </div>

        <div className="space-y-4">
          <div className="relative">
            <label className="text-sm text-[#8f9095] mb-1 block">
              Password <sup className="text-pink-200">*</sup>
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full bg-[#242424] text-white px-3 py-2 rounded-lg border border-[#2a2a2a] focus:outline-none focus:border-[#4b9cff] placeholder:text-[#8f9095]"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[34px] cursor-pointer text-[#8f9095]"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div className="relative">
            <label className="text-sm text-[#8f9095] mb-1 block">
              Confirm Password <sup className="text-pink-200">*</sup>
            </label>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="w-full bg-[#242424] text-white px-3 py-2 rounded-lg border border-[#2a2a2a] focus:outline-none focus:border-[#4b9cff] placeholder:text-[#8f9095]"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[34px] cursor-pointer text-[#8f9095]"
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black hover:bg-grey text-white py-2.5 px-4 rounded-lg transition-colors font-medium hover:bg-[#4b9cff]"
        >
          Continue
        </button>
      </form>
    </div>
  )
}

export default SignupForm