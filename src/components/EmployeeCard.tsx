import { Pencil, Trash2 } from "lucide-react";
import type { UserType } from "../types/type";

type EmployeeCardProps = {
  employee: UserType;
  onEdit: (employee: UserType) => void;
  onDelete: (employee: UserType) => void;
};

const EmployeeCard = ({ employee, onEdit, onDelete }: EmployeeCardProps) => {
  const initials = employee.name
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Top Section */}
      <div className="relative h-70 bg-linear-to-br from-slate-50 via-slate-50 to-indigo-50/40 flex items-center justify-center">
        {/* Department */}
        <div className="absolute top-4 left-4 z-10 rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-slate-600 shadow-sm">
          {employee.divisi?.divisi ||  "Employee"}
        </div>

        {/* Avatar */}
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-indigo-100 text-4xl font-medium text-indigo-500 ring-8 ring-white/50 shadow-sm">
          {employee.image ? (
            <img
              src={employee.image}
              alt={employee.name}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            initials
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-medium text-slate-800 truncate">
          {employee.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {employee.department}
        </p>
      </div>

      {/* Overlay */}
      <div
        className="
          absolute inset-0 z-20
          flex items-center justify-center
          bg-linear-to-br
          from-indigo-600/85
          via-indigo-500/75
          to-slate-900/85
          opacity-0
          transition-all duration-300
          group-hover:opacity-100
        "
      >
        <div
          className="
            flex items-center gap-3
            translate-y-4 opacity-0
            transition-all duration-300 delay-75
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          {/* Edit */}
          <button
            type="button"
            onClick={() => onEdit(employee)}
            className="
              flex items-center gap-2
              rounded-lg
              bg-white
              px-4 py-2.5
              text-sm font-semibold
              text-indigo-600
              shadow-lg
              transition-all duration-200
              hover:scale-105
              hover:bg-slate-50
              active:scale-95
            "
          >
            <Pencil size={16} />
            Edit
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={() => onDelete(employee)}
            className="
              flex items-center gap-2
              rounded-lg
              bg-red-500
              px-4 py-2.5
              text-sm font-semibold
              text-white
              shadow-lg
              transition-all duration-200
              hover:scale-105
              hover:bg-red-600
              active:scale-95
            "
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
