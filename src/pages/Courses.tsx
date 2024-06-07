import { Course } from "@components/Course";
import { CoursePromo } from "@components/CoursePromo";
import { Route, Routes } from "react-router-dom";

export const Courses = () => {
    return (
        <div className="courses">
            <Routes>
                <Route path=":id" element={<Course />} />
                <Route path=":id/promo" element={<CoursePromo />} />
            </Routes>
        </div>
    );
}