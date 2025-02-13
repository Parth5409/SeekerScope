import { Contact, Mail, Pen } from "lucide-react";
import Navbar from "./shared/Navbar.jsx";
import { Avatar, AvatarImage } from "./ui/avatar.jsx";
import { Button } from "./ui/button.jsx";
import { Badge } from "./ui/badge.jsx";
import { Label } from "./ui/label.jsx";
import AppliedJobTable from "./AppliedJobTable.jsx";
import { useState } from "react";
import UpdateProfileDialogue from "./UpdateProfileDialogue.jsx";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs.jsx";
import { useNavigate } from "react-router-dom";

const isResume = true;
export default function Profile() {
  useGetAppliedJobs();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={
                  user?.profile?.profilePhoto ||
                  "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                }
                alt="profileImg"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
          <Button
            onClick={() => setOpen(true)}
            className="flex justify-around"
            variant="outline"
          >
            <Pen />  &nbsp; Edit
          </Button>
          <Button
            onClick={() => navigate(`/roadmaps/${user._id}`)}
            className="flex justify-around"
            variant="outline"
          >
            <Pen /> &nbsp; Roadmap
          </Button>
          </div>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.length != 0 ? (
              user?.profile?.skills.map((item, idx) => (
                <Badge key={idx}>{item}</Badge>
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>N/A</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Application Table */}
        <AppliedJobTable />
      </div>
      <UpdateProfileDialogue open={open} setOpen={setOpen} />
    </div>
  );
}
