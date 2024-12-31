import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import addicon from "../../assets/addicon.svg";
import removeicon from "../../assets/removeicon.svg";
import deleteicon from "../../assets/icons/deleteicon.svg";
import { GeneralButton } from "../Buttons/generalbuttontemplate";

const studyAreas = [
  { id: 1, name: "Science", courses: ["Physics", "Chemistry", "Biology"] },
  {
    id: 2,
    name: "Arts and Humanities ",
    courses: ["History", "Literature", "Philosophy"],
  },
  {
    id: 3,
    name: "Technology",
    courses: ["Computer Science", "Information Technology", "Cybersecurity"],
  },
  // Add more study areas and courses as needed
];

const CoursesForm = () => {
  const initialValues = {
    studyArea: "Arts", // Default value set to 'Arts'
    courses: [{ course: "" }],
  };

  const validationSchema = Yup.object({
    studyArea: Yup.string().required("Study area is required"),
    courses: Yup.array().of(
      Yup.object({
        course: Yup.string().required("Course is required"),
      })
    ),
  });

  const getCoursesForSelectedArea = (studyArea) => {
    const area = studyAreas.find((area) => area.name === studyArea);
    return area ? area.courses : [];
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
    // Handle form submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched }) => (
        <Form className="flex-col flex items-center mt-[40px] gap-[25px] ">
          <div className="flex flex-col gap-[12px] ">
            <label
              htmlFor="studyArea"
              className="font-ubuntu 
            text-light 
            text-[14px] 
            text-formblack
            "
            >
              Choose an area
            </label>
            <Field
              as="select"
              name="studyArea"
              className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formcolor  rounded-[5px] 
            px-[15px] border-formcolor w-[270px] h-[44px] appearance-none "
            >
              {studyAreas.map((area) => (
                <option key={area.id} value={area.name}>
                  {area.name}
                </option>
              ))}
            </Field>
            {touched.studyArea && errors.studyArea && (
              <div className="text-red-600">{errors.studyArea}</div>
            )}
          </div>

          <FieldArray name="courses">
            {({ push, remove }) => (
              <div className="flex flex-col gap-[11px] ">
                {values.courses.map((course, index) => (
                  <div key={index} className="items-center ">
                    <div className="flex-col flex gap-[12px] ">
                      <label
                        htmlFor="Select a course"
                        className="font-ubuntu 
            text-light 
            text-[14px] 
            text-formblack
            "
                      >
                        Select a course
                      </label>
                      <div className="flex items-center gap-[9px] ">
                        <Field
                          as="select"
                          name={`courses[${index}].course`}
                          className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formcolor  rounded-[5px] 
            px-[15px] border-formcolor w-[245px] h-[44px] appearance-none "
                        >
                          {getCoursesForSelectedArea(values.studyArea).map(
                            (course, idx) => (
                              <option key={idx} value={course}>
                                {course}
                              </option>
                            )
                          )}
                        </Field>
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="block w-[15px] h-[20px] "
                        >
                          <img
                            className="w-[24px] h-[24px] "
                            src={deleteicon}
                            alt="add icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => push({ course: "" })}
                  className="flex items-center mt-[15px] gap-[10px] font-mont font-bold text-[14px] text-darkgreen "
                >
                  Add more subject
                  <img
                    className="w-[13px] h-[13px] "
                    src={addicon}
                    alt="add subject icon "
                  />
                </button>
              </div>
            )}
          </FieldArray>

          <GeneralButton
            width={`236px`}
            font={`ubuntu`}
            height={`42px`}
            radius={"4px"}
            title={`submit`}
            color={"logogreen"}
            textcolor={"white"}
            link={"/#"}
            textsize={"15px"}
            fontstyle={`font-semibold`}
            external={`px-[21px] py-[10px] self-center mt-[12px] `}
          />
        </Form>
      )}
    </Formik>
  );
};

export default CoursesForm;
