import * as React from 'react';
import InputChips from './InputChips';
import { IIdValue } from './ChipsModels';

export default { title: 'Chips' };

export const ChipsVersion1 = () => {
  const rolesRefs: IIdValue[] = [
    { Id: '1', Value: 'Admin' },
    { Id: '2', Value: 'User' },
    { Id: '3', Value: 'Manager' }
  ];
  const initSelectedRolesRefs: IIdValue[] = [];

  const [selectedRolesRefs, setSelectedRoles] = React.useState(
    initSelectedRolesRefs
  );

  const handleAddRole = (e: React.ChangeEvent) => {
    e.preventDefault();

    const index = (e.nativeEvent.target as any).selectedIndex;
    const fieldValue = (e.nativeEvent.target as any)[index].text;
    const id = (e.target as any).value;
    const found = selectedRolesRefs.find(x => +x.Id === +id)
    if (!found) {
      selectedRolesRefs.push({ Id: id, Value: fieldValue });
      const newSelectedRolesRefs: IIdValue[] = selectedRolesRefs.map(
        (item, idx) => {
          return {
            Id: item.Id,
            Value: item.Value
          };
        }
      );
      setSelectedRoles(newSelectedRolesRefs);
    }
  };

  const handleDeleteRole = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault();

    const fieldValue = selectedRolesRefs[index];

    const array = selectedRolesRefs; // make a separate copy of the array
    const i = array.indexOf(fieldValue);
    if (i !== -1) {
      array.splice(i, 1);
      const newSelectedRolesRefs: IIdValue[] = array.map((item, idx) => {
        return {
          Id: item.Id,
          Value: item.Value
        };
      });
      setSelectedRoles(newSelectedRolesRefs);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <div className="form-group">
            <label>Roles</label>
            <InputChips
              name={'Roles'}
              value={'0'}
              cboxItems={rolesRefs}
              chipsItems={selectedRolesRefs}
              handleChipsAdd={handleAddRole}
              handleChipsDelete={handleDeleteRole}
              classCss="form-control"
            />
          </div>
        </div>
      </div>
    </>
  );
};
