import React from 'react'

export default function NoPage() {
    return (
        <div className="relative h-screen">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-center">
                <h1 className="text-slate-800 dark:text-slate-300  text-9xl">
                    Error 404
                </h1>
                <p className="text-slate-900 dark:text-slate-400 text-4xl">
                    Page not Found
                </p>
            </div>
        </div>

    )
}
