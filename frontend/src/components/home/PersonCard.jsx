// interface PersonCardProps {
//   name;
//   role;
//   contact;
//   imageSrc;
// }

// export default function PersonCard({ name, role, contact, imageSrc }) { name, role, contact, imageSrc } {
//   return (
//     <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
//       <div className="w-32 h-32 rounded-full p-1 bg-secondary mb-4 shadow-md">
//         <img 
//           src={imageSrc} 
//           alt={name} 
//           className="w-full h-full object-cover rounded-full border-2 border-background"
//         />
//       </div>
//       <h3 className="font-serif font-bold text-xl text-primary mb-1">{name}</h3>
//       <div className="bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 border border-primary/10">
//         {role}
//       </div>
//       <p className="text-sm text-muted-foreground font-medium">{contact}</p>
//     </div>
//   );
// }





// interface PersonCardProps {
//   name;
//   role;
//   contact;
//   imageSrc;
//   imageZoom?; // new prop
// }

// export default function PersonCard({ name, role, contact, imageSrc }) {
//   name,
//   role,
//   contact,
//   imageSrc,
//   imageZoom = "scale-100"
// } {
//   return (
//     <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
      
//       <div className="w-32 h-32 rounded-full p-1 bg-secondary mb-4 shadow-md overflow-hidden">
//         <img 
//           src={imageSrc} 
//           alt={name}
//           className={`w-full h-full object-cover rounded-full border-2 border-background transform ${imageZoom}`}
//         />
//       </div>

//       <h3 className="font-serif font-bold text-xl text-primary mb-1">
//         {name}
//       </h3>

//       <div className="bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 border border-primary/10">
//         {role}
//       </div>

//       <p className="text-sm text-muted-foreground font-medium">
//         {contact}
//       </p>

//     </div>
//   );
// }









// interface PersonCardProps {
//   name;
//   role;
//   contact;
//   imageSrc;
//   imagePosition?;
// }

// export default function PersonCard({ name, role, contact, imageSrc }) {
//   name,
//   role,
//   contact,
//   imageSrc,
//   imagePosition = "object-center"
// } {
//   return (
//     <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl shadow-sm">
      
//       <div className="w-32 h-32 rounded-full p-1 bg-secondary mb-4 shadow-md overflow-hidden">
//         <img
//           src={imageSrc}
//           alt={name}
//           className={`w-full h-full object-cover rounded-full border-2 border-background ${imagePosition}`}
//         />
//       </div>

//       <h3 className="font-serif font-bold text-xl text-primary mb-1">
//         {name}
//       </h3>

//       <p className="text-sm text-muted-foreground">
//         {contact}
//       </p>

//     </div>
//   );
// }













// interface PersonCardProps {
//   name;
//   role;
//   contact;
//   imageSrc;
//   imageSize?; // controls size instead of scale
// }

// export default function PersonCard({ name, role, contact, imageSrc }) {
//   name,
//   role,
//   contact,
//   imageSrc,
//   imageSize = "w-32 h-32"
// } {
//   return (
//     <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">

//       <div className={`${imageSize} rounded-full p-1 bg-secondary mb-4 shadow-md overflow-hidden`}>
//         <img
//           src={imageSrc}
//           alt={name}
//           className="w-full h-full object-cover rounded-full border-2 border-background"
//         />
//       </div>

//       <h3 className="font-serif font-bold text-xl text-primary mb-1 whitespace-pre-line">
//         {name}
//       </h3>

//       {role && (
//         <div className="bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 border border-primary/10">
//           {role}
//         </div>
//       )}

//       <p className="text-sm text-muted-foreground font-medium whitespace-pre-line">
//         {contact}
//       </p>

//     </div>
//   );
// }









export default function PersonCard({
  name,
  role,
  role2,
  contact,
  imageSrc,
  imageSize = "w-44 h-44",
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center max-w-md w-full min-h-[450px] flex flex-col">

      {/* Image */}
      <div
        className={`${imageSize} rounded-full overflow-hidden border-4 border-[#F4B400] mx-auto mb-6`}
      >
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover scale-80 object-[50%_10%]"
        />
      </div>

      {/* Name */}
      <h3 className="text-[20px] font-serif font-bold text-[#06254D] leading-tight whitespace-nowrap">
        {name}
      </h3>

      {/* Role */}
      {role && (
        <p className="mt-3 text-[18px] font-semibold text-[#06254D]">
          {role}
        </p>
      )}

      {/* Role 2 */}
      {role2 && (
        <p className="text-[18px] font-semibold text-[#06254D]">
          {role2}
        </p>
      )}

      {/* Contact */}
      {contact && (
        <p className="mt-4 text-[16px] text-[#06254D] leading-relaxed whitespace-pre-line">
          {contact}
        </p>
      )}

    </div>
  );
}