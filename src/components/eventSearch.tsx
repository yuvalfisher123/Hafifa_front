import React, { useEffect } from 'react';
import AdvancedSearch from './advancedSearch/AdvancedSearch';
import DataTable from './dataTable/dataTable';
import api from '../apiCalls/api';

export default () => {
    const [searchResaults, setSearchResaults] = React.useState<Array<any>>(
        []
    );

    const handleSearchResaultChange = (list: any) => {
        setSearchResaults(list.flat());
    };

    const handleEventSearch = async (startDate : Date, endDate : Date) => {
        handleSearchResaultChange(await api.getEventsInDates(Math.floor(startDate.getTime() / 1000),
                                                 Math.floor(endDate.getTime() / 1000)));
        
    }

    return (
        <div style={{ height:'100vh', display:'flex', alignItems: 'center', justifyContent: 'center' }}> 
        { !searchResaults.toString() && 
            <AdvancedSearch handleSearch={handleEventSearch} /> ||
            <DataTable rows={searchResaults}/>
        }
        </div>
    );
}
