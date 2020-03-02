import MaterialTable from 'material-table';
import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';

const DatesTable2 = props => {
  // const tableIcons = {
  //   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  //   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  //   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  //   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  //   DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  //   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  //   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  //   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  //   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  //   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  //   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  //   PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  //   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  //   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  //   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  //   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  //   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };


const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

const columns = [
  { title: <I18n t="day" />, field: 'day', lookup: { "MONDAY": <I18n t={days[0]} />, "TUESDAY": <I18n t={days[1]} />, "WEDNESDAY": <I18n t={days[2]} />, "THURSDAY": <I18n t={days[3]} />, "FRIDAY": <I18n t={days[4]} />, "SATURDAY": <I18n t={days[5]} />, "SUNDAY": <I18n t={days[6]} /> } },
  { title: <I18n t="openingHours" />, field: 'opening', type: 'time' },
  { title: <I18n t="closingHours" />, field: 'closing', type: 'time' },
];

const [listHours, updateListHours] = React.useState({
  data: [
    { day: 0, opening: 'Baran', closing: 1987 },
    { day: 3, opening: 'Baran', closing: 2017 },
  ],
});

return (
  <MaterialTable
    // icons={tableIcons}
    title="Horarios de atención"
    columns={columns}
    data={listHours.data}
    editable={{
      onRowAdd: newData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            updateListHours(prevState => {
              const data = [...prevState.data];
              data.push(newData);
              props.setHoursProvider(data);
              return { ...prevState, data };
            });
          }, 600);
        }),
      onRowUpdate: (newData, oldData) =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            if (oldData) {
              updateListHours(prevState => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                props.setHoursProvider(data);
                return { ...prevState, data };
              });
            }
          }, 600);
        }),
      onRowDelete: oldData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            updateListHours(prevState => {
              const data = [...prevState.data];
              data.splice(data.indexOf(oldData), 1);
              props.setHoursProvider(data);
              return { ...prevState, data };
            });
          }, 600);
        }),
    }}
  />
);
}

export default connect(mapStateToProps, mapDispatchToProps)(DatesTable2);