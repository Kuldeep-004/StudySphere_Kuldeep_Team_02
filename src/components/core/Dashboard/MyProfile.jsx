import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"
import { apiConnector } from "../../../services/apiconnector"
import { profileEndpoints } from "../../../services/apis"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await apiConnector("GET", "http://localhost:4000/api/v1/profile/getUserDetails", null, {
          Authorization: `Bearer ${token}`,
        })
        if (response.data.success) {
          setUserData(response.data.data)
        }
      } catch (error) {
        console.log("Could not fetch user details")
      }
    }
    getUserDetails()
  }, [token])

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const response = await apiConnector("GET", profileEndpoints.GET_COIN_LEADERBOARD_API, null, {
          Authorization: `Bearer ${token}`,
        })
        if (response.data.success) {
          setLeaderboard(response.data.data)
        }
      } catch (error) {
        console.log("Could not fetch leaderboard")
      }
    }
    getLeaderboard()
  }, [token])

  console.log(userData);

  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Upi Id</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Upi Id"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Coin Information Section - Only for Students */}
      {user?.userType === "Student" && (
        <>
          <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
            <div className="flex w-full items-center justify-between">
              <p className="text-lg font-semibold text-richblack-5">
                Coin Information
              </p>
            </div>
            <div className="flex max-w-[500px] justify-between">
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mb-2 text-sm text-richblack-600">Current Coins</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {userData?.coin || 0}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mb-2 text-sm text-richblack-600">Total Coins Earned</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {userData?.totalcoin || 0}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
            <div className="flex w-full items-center justify-between">
              <p className="text-lg font-semibold text-richblack-5">
                Coin Leaderboard
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              {leaderboard.map((student, index) => (
                <div key={index} className="flex items-center justify-between rounded-md bg-richblack-700 p-4">
                  <div className="flex items-center gap-x-4">
                    <span className="text-lg font-semibold text-yellow-50">#{index + 1}</span>
                    <img
                      src={student.image}
                      alt={`profile-${student.firstName}`}
                      className="aspect-square w-[40px] rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-richblack-5">
                        {student.firstName} {student.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm text-richblack-300">Total Coins:</span>
                    <span className="text-lg font-semibold text-yellow-50">{student.totalcoin || 0}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}