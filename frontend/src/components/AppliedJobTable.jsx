import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>A list of applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className={"text-right"}> Status </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1,2,3,4].map((item,index) => (
                            <TableRow key={index}>
                                <TableCell>20-7-2025</TableCell>
                                <TableCell>SDE-1</TableCell>
                                <TableCell>Google</TableCell>
                                <TableCell className={"text-right"}><Badge className="bg-green-600 text-white">Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable
