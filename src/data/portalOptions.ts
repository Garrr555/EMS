export type PortalOptionsType = {
  to: string;
  title: string;
  description: string;
  icon: string;
};

export const portalOptions: PortalOptionsType[] = [
  {
    to: "/login/admin",
    title: "Admin Portal",
    description:
      "Manage Employee, Departments, Payroll, and system configurations",
    icon: "ShieldIcon",
  },
  {
    to: "/login/employee",
    title: "Employee Portal",
    description:
      "View your profile, track attendance, request time off, and access payslips",
    icon: "UserIcon",
  },
];
