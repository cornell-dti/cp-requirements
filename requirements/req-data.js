const university = {
    type: "all",
    value: "UNI",
    name: "University Requirements",
    requirements: [
        {
            name: "Academic Credits",
            search: "alleligible", // PE and "10XX" courses do not count
            reqs: [],
            minCreds: 120,
            maxCreds: 120,
            applies: "all"
        },
        {
            name: "Cornell Credits",
            search: "alleligible",
            reqs: [],
            minCreds: 60,
            maxCreds: 120,
            applies: "transfers"
        },
        {
            name: "Physical Education",
            search: "subject",
            reqs: ["PE", "PE"],
            minCreds: 2,
            maxCreds: 2,
            applies: "all"
        },
        {
            name: "Swimming Test",
            search: "selfcheck",
            reqs: [],
            minCreds: 0,
            maxCreds: 0,
            applies: "all"
        }
    ]
}

const as = {
    type: ""
}

const en = {
    type: "college",
    value: "EN",
    name: "Engineering Requirements",
    requirements: [
        {
            name: "Mathematics",
            search: "full",
            reqs: ["MATH 1910", "MATH 1920", ["MATH 2930", "MATH 2940"]],
            minCreds: 14,
            maxCreds: 16,
            uniqueCourses: 0,
            majorDep: true
        },
        {
            name: "Physics",
            search: "full",
            reqs: ["PHYS 1112", "PHYS 2213"],
            minCreds: 8,
            maxCreds: 12,
            uniqueCourses: 0,
            majorDep: true
        },
        {
            name: "Chemistry",
            search: "full",
            reqs: ["CHEM 2090"],
            minCreds: 4,
            naxCreds: 8,
            uniqueCourses: 0,
            majorDep: true
        },
        {
            name: "Freshman Writing Seminars",
            search: "title",
            reqs: ["FWS:"],
            minCreds: 6,
            maxCreds: 12,
            uniqueCourses: 0,
            majorDep: false
        },
        {
            name: "Computing",
            search: "full",
            reqs: [["CS 1110", "CS 1112", "CS 1114", "CS 1115"]],
            minCreds: 4,
            maxCreds: 4,
            uniqueCourses: 0,
            majorDep: false
        },
        {
            name: "Introducation to Engineering",
            search: "subject",
            reqs: ["ENGRI"],
            minCreds: 4,
            maxCreds: 4,
            uniqueCourses: 0,
            majorDep: false
        },
        {
            name: "Engineering Distribution",
            search: "subject",
            reqs: ["ENGRD"],
            minCreds: 6,
            maxCreds: 8,
            uniqueCourses: 0,
            majorDep: false
        },
        {
            name: "Liberal Studies Distribution",
            search: "distribution",
            reqs: [["CA", "HA", "LA/LAD", "KCM", "SBA", "FL", "CE"],
            ["CA", "HA", "LA/LAD", "KCM", "SBA", "FL", "CE"],
            ["CA", "HA", "LA/LAD", "KCM", "SBA", "FL", "CE"],
            ["CA", "HA", "LA/LAD", "KCM", "SBA", "FL", "CE"],
            ["CA", "HA", "LA/LAD", "KCM", "SBA", "FL", "CE"],
            ["CA", "HA", "LA/LAD", "KCM", "SBA", "FL", "CE"]],
            minCreds: 18,
            maxCreds: 120,
            uniqueCourses: 3,
            majorDep: false
        },
        {
            name: "Advisor-Approved Electives",
            search: "selfcheck",
            reqs: [],
            minCreds: 6,
            maxCreds: 6,
            uniqueCourses: 0,
            majorDep: false
        },
        {
            name: "Technical Communication",
            search: "selfcheck",
            reqs: [],
            minCreds: 3,
            maxCreds: 4,
            uniqueCourses: 0,
            majorDep: false
        }
    ]
}