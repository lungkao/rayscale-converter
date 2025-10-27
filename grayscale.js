/**
 * Standalone Grayscale Converter - JavaScript Version
 * Easy to use, CDN ready, no PHP required
 * 
 * Usage:
 * <script src="https://your-cdn.com/grayscale.js"></script>
 * <script>GrayscaleConverter.init();</script>
 * 
 * @version 1.0.0
 * @author Pisan Chueachatchai
 * @license MIT
 */

(function(window) {
    'use strict';
    
    const DEFAULT_CONFIG = {
        intensity: 80,
        excludeMedia: true,
        barEnabled: false,
        ribbonEnabled: true,
        ribbonPosition: 'top-left',
        ribbonCDN: 'https://cdn.jsdelivr.net/gh/your-username/grayscale-converter@main/images/',
        ribbonImages: {
            'top-left': 'black_ribbon_top_left.png',
            'top-right': 'black_ribbon_top_right.png',
            'bottom-left': 'black_ribbon_bottom_left.png',
            'bottom-right': 'black_ribbon_bottom_right.png'
        }
    };
    
    const ThaiToneColors = {
        'dam-khe-ma': { bg: '#00040A', text: '#fff' },
        'tao': { bg: '#7C7C7C', text: '#fff' },
        'phan-khram': { bg: '#364F5A', text: '#fff' },
        'khab-dam': { bg: '#162836', text: '#fff' },
        'nil-kan': { bg: '#051520', text: '#fff' },
        'muek-jin': { bg: '#494C54', text: '#fff' },
        'khe-ma-yang': { bg: '#6D6C67', text: '#fff' },
        'peek-ka': { bg: '#2A2D29', text: '#fff' },
        'dam-muek': { bg: '#444547', text: '#fff' },
        'khiew-nil': { bg: '#112B37', text: '#fff' },
        'look-wa': { bg: '#5A3E4C', text: '#fff' },
        'namtan-mai': { bg: '#55383A', text: '#fff' },
        'som-rit-dech': { bg: '#685B4B', text: '#fff' },
        'lek-lai': { bg: '#4C3F2B', text: '#fff' },
        'mo-muek': { bg: '#5E6665', text: '#fff' },
        'sawat': { bg: '#918F95', text: '#fff' },
        'nam-rak': { bg: '#4B2F2D', text: '#fff' },
        'som-rit': { bg: '#8A7358', text: '#fff' },
        'kaki': { bg: '#BBA88E', text: '#000' },
        'tao-khieow': { bg: '#BEC8BD', text: '#000' },
        'dok-lao': { bg: '#C5C1C6', text: '#000' },
        'bua-roi': { bg: '#9A8F8C', text: '#fff' },
        'khwan-phloeng': { bg: '#AFA094', text: '#000' },
        'mok': { bg: '#D5D3C2', text: '#000' },
        'khao-khab': { bg: '#E3E5DF', text: '#000' }
    };
    
    function GrayscaleConverter(config = {}) {
        this.config = Object.assign({}, DEFAULT_CONFIG, config);
        this.init();
    }
    
    GrayscaleConverter.prototype.init = function() {
        this.injectCSS();
        this.showRibbon();
    };
    
    GrayscaleConverter.prototype.injectCSS = function() {
        const styleId = 'gs-styles';
        let style = document.getElementById(styleId);
        
        if (!style) {
            style = document.createElement('style');
            style.id = styleId;
            document.head.appendChild(style);
        }
        
        const intensity = Math.max(0, Math.min(100, this.config.intensity));
        const opacity = intensity / 100;
        
        let css = `
            /* Grayscale Overlay */
            body::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: gray;
                opacity: ${opacity};
                mix-blend-mode: saturation;
                pointer-events: none;
                z-index: 99998;
            }
        `;
        
        // Exclude media elements if enabled
        if (this.config.excludeMedia) {
            css += `
            img, video, iframe, object, embed, canvas, svg, picture, source {
                position: relative;
                z-index: 99999;
                mix-blend-mode: normal !important;
            }
            `;
        }
        
        // Ribbon styles
        css += `
            .gs-ribbon {
                position: fixed;
                z-index: 999999;
                width: 70px;
                height: auto;
                pointer-events: none;
            }
            
            .gs-ribbon.gs-top { top: 0; }
            .gs-ribbon.gs-bottom { bottom: 0; }
            .gs-ribbon.gs-left { left: 0; }
            .gs-ribbon.gs-right { right: 0; }
        `;
        
        style.textContent = css;
    };
    
    GrayscaleConverter.prototype.showRibbon = function() {
        if (!this.config.ribbonEnabled) {
            return;
        }
        
        const position = this.config.ribbonPosition || 'top-left';
        const filename = this.config.ribbonImages[position] || this.config.ribbonImages['top-left'];
        const imgUrl = this.config.ribbonCDN + filename;
        
        const positions = {
            'top-left': ['gs-top', 'gs-left'],
            'top-right': ['gs-top', 'gs-right'],
            'bottom-left': ['gs-bottom', 'gs-left'],
            'bottom-right': ['gs-bottom', 'gs-right']
        };
        
        const classes = 'gs-ribbon ' + (positions[position] || positions['top-left']).join(' ');
        
        const ribbon = document.createElement('img');
        ribbon.src = imgUrl;
        ribbon.alt = 'Ribbon';
        ribbon.className = classes;
        ribbon.setAttribute('loading', 'lazy');
        
        document.body.appendChild(ribbon);
    };
    
    GrayscaleConverter.prototype.setIntensity = function(value) {
        this.config.intensity = Math.max(0, Math.min(100, value));
        this.injectCSS();
    };
    
    GrayscaleConverter.prototype.toggle = function() {
        if (this.config.intensity > 0) {
            this.config.intensity = 0;
        } else {
            this.config.intensity = DEFAULT_CONFIG.intensity;
        }
        this.injectCSS();
    };
    
    // Global instance
    window.GrayscaleConverter = GrayscaleConverter;
    
    // Auto-init with default config if script has data attributes
    if (document.currentScript) {
        const script = document.currentScript;
        const intensity = script.getAttribute('data-intensity');
        const excludeMedia = script.getAttribute('data-exclude-media');
        const ribbonEnabled = script.getAttribute('data-ribbon-enabled');
        const ribbonPosition = script.getAttribute('data-ribbon-position');
        const ribbonCDN = script.getAttribute('data-ribbon-cdn');
        
        const config = {};
        if (intensity !== null) config.intensity = parseInt(intensity);
        if (excludeMedia !== null) config.excludeMedia = excludeMedia === 'true';
        if (ribbonEnabled !== null) config.ribbonEnabled = ribbonEnabled === 'true';
        if (ribbonPosition) config.ribbonPosition = ribbonPosition;
        if (ribbonCDN) config.ribbonCDN = ribbonCDN;
        
        window.grayscaleInstance = new GrayscaleConverter(config);
    }
    
})(window);
