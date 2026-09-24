import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: string[];
}) => {
  // Ho semplificato la generazione dello skeleton usando Array.from
  const renderSkeleton = () => {
    return Array.from({ length: 12 }).map((_, index) => (
      <li key={index} className="w-full">
        {skeleton({ widthCls: 'w-3/4', heightCls: 'h-4', className: 'my-1' })}
      </li>
    ));
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tech Stack</span>
            )}
          </h5>
        </div>
        <div className="p-3">
          {/* Sostituito flex con grid a 2 colonne, aggiunto lo stile della lista */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside text-sm mt-2">
            {loading
              ? renderSkeleton()
              : skills.map((skill, index) => (
                  <li key={index} className="text-base-content">
                    {skill}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
