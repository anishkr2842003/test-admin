import React, { useEffect, useState } from 'react'
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';
import apiClient from '../../utils/apiClient';

const ShimmerTable = () => (
    <ContentLoader
        speed={2}
        width="100%"
        height={300}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        {Array(20)
            .fill('')
            .map((_, index) => (
                <rect key={index} x="10" y={index * 40} rx="3" ry="3" width="95%" height="30" />
            ))}
    </ContentLoader>
);

function Datatable() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        const timerLabel = 'fetchData' + Date.now();
        console.time(timerLabel);
        const fetchData = async () => {
            try {
                const response = await apiClient.get('/get-data');
                setData(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            } finally {
                console.timeEnd(timerLabel);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <ShimmerTable />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const dataSource = data.map(item => ({ ...item, key: item.id })).reverse();

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        filterDropdownProps: {
            onOpenChange: (visible) => {
                if (visible) {
                    setSearchText(searchText);
                }
            },
        },
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id, // use for number sorting
            // ...getColumnSearchProps('id')
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            ...getColumnSearchProps('name')
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
            sorter: (a, b) => a.position.localeCompare(b.position),
            ...getColumnSearchProps('position')
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
            ...getColumnSearchProps('email')
        },
        {
            title: 'Contact No',
            dataIndex: 'contact_nu',
            key: 'contact_nu',
            sorter: (a, b) => a.contact_nu.localeCompare(b.contact_nu),
            ...getColumnSearchProps('contact_nu')
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'dob',
            sorter: (a, b) => a.dob.localeCompare(b.dob),
            ...getColumnSearchProps('dob')
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            sorter: (a, b) => a.address.localeCompare(b.address),
        },
    ];

    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                // pagination={{
                //     pageSize: 10,
                // }}
                scroll={{
                    x: 'max-content',
                    y: isMobile ? 300 : 500,
                }}
            />
        </>
    )
}

export default Datatable
