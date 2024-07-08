import React from 'react';
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

    const [isInSearch, setIsInSearch] = React.useState<boolean>(
        true
    );

    const handleIsInSearchChange = (bool: boolean) => {
        setIsInSearch(bool);
    };

    const handleEventSearch = async (startDate : Date, endDate : Date) => {
        handleSearchResaultChange(await api.getEventsInDates(Math.floor(startDate.getTime() / 1000),
                                                 Math.floor(endDate.getTime() / 1000)));
        handleIsInSearchChange(false);                                         
    }

    return (
        <div style={{ height:'100vh', display:'flex', alignItems: 'center', justifyContent: 'center' }}> 
        { isInSearch && 
            <AdvancedSearch handleSearch={handleEventSearch} /> }
        {!isInSearch && 
            <DataTable rows={searchResaults}/>
        }
        </div>
    );
}
