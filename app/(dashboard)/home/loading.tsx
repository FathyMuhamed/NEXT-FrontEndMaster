import Card from '@/components/Card';
import React from 'react'

const loading = () => {
  return (<div className="flex justify-center items-center w-full h-full">
    <Card className="">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400" />
    </Card>
  </div>)
}

export default loading;
