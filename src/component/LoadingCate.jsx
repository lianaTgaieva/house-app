import React from 'react';

function LoadingCate() {
    return (
        <div className="container"> {/* Используйте className вместо class */}
            <div className="loading-item">
                <div className="skeleton-icon"></div>
                <div className="skeleton-small-text"></div>
            </div>
            <div className="loading-item">
                <div className="skeleton-icon"></div>
                <div className="skeleton-small-text"></div>
            </div>
            <div className="loading-item">
                <div className="skeleton-icon"></div>
                <div className="skeleton-small-text"></div>
            </div>
            <div className="loading-item">
                <div className="skeleton-icon"></div>
                <div className="skeleton-small-text"></div>
            </div>
            <div className="loading-item">
                <div className="skeleton-icon"></div>
                <div className="skeleton-small-text"></div>
            </div>
            <div className="loading-item">
                <div className="skeleton-icon"></div>
                <div className="skeleton-small-text"></div>
            </div>
            <div className="loading-item">
                <div className="skeleton-icon"></div>
                <div className="skeleton-small-text"></div>
            </div>
        </div>
    );
}

export default LoadingCate; // Закрывающая фигурная скобка была отсутствует