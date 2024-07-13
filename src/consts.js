import { combineRgb } from '@companion-module/base'

export const choices = {
	device: [
		{ id: 0, label: 'e2210' },
		{ id: 1, label: 'e2212' },
	],
    polling: [
		{ id: 0, label: 'DI: Status' },
		{ id: 1, label: 'DI: Count' },
        { id: 2, label: 'DO: Status' },
        { id: 3, label: 'DO: Pulse' },
	],
	e2210inputs: [
		{ id: 0, label: 'Input 0' },
		{ id: 1, label: 'Input 1' },
		{ id: 2, label: 'Input 2' },
		{ id: 3, label: 'Input 3' },
		{ id: 4, label: 'Input 4' },
		{ id: 5, label: 'Input 5' },
		{ id: 6, label: 'Input 6' },
		{ id: 7, label: 'Input 7' },
		{ id: 8, label: 'Input 8' },
		{ id: 9, label: 'Input 9' },
		{ id: 10, label: 'Input 10' },
		{ id: 11, label: 'Input 11' },
	],
	e2212inputs: [
		{ id: 0, label: 'Input 0' },
		{ id: 1, label: 'Input 1' },
		{ id: 2, label: 'Input 2' },
		{ id: 3, label: 'Input 3' },
		{ id: 4, label: 'Input 4' },
		{ id: 5, label: 'Input 5' },
		{ id: 6, label: 'Input 6' },
		{ id: 7, label: 'Input 7' },
		{ id: 8, label: 'Input 8' },
		{ id: 9, label: 'Input 9' },
		{ id: 10, label: 'Input 10' },
		{ id: 11, label: 'Input 11' },
	],
	e2210outputs: [
		{ id: 0, label: 'Output 0' },
		{ id: 1, label: 'Output 1' },
		{ id: 2, label: 'Output 2' },
		{ id: 3, label: 'Output 3' },
		{ id: 4, label: 'Output 4' },
		{ id: 5, label: 'Output 5' },
		{ id: 6, label: 'Output 6' },
		{ id: 7, label: 'Output 7' },
	],
	e2212outputs: [
		{ id: 0, label: 'Output 0' },
		{ id: 1, label: 'Output 1' },
		{ id: 2, label: 'Output 2' },
		{ id: 3, label: 'Output 3' },
		{ id: 4, label: 'Output 4' },
		{ id: 5, label: 'Output 5' },
		{ id: 6, label: 'Output 6' },
		{ id: 7, label: 'Output 7' },
		{ id: 8, label: 'Output 8' },
		{ id: 9, label: 'Output 9' },
		{ id: 10, label: 'Output 10' },
		{ id: 11, label: 'Output 11' },
	],
	DIMode: [
		{ id: 0, label: 'DI' },
		{ id: 1, label: 'Counter' },
	],
	DIStatus: [
		{ id: 0, label: 'Off' },
		{ id: 1, label: 'On' },
	],
	DITrigger: [
		{ id: 0, label: 'Low to High' },
		{ id: 1, label: 'High to Low' },
		{ id: 2, label: 'Both' },
	],
	DICntStart: [
		{ id: 0, label: 'Stop' },
		{ id: 1, label: 'Start' },
	],
	DOMode: [
		{ id: 0, label: 'DO' },
		{ id: 1, label: 'Pulse' },
	],
	DOStatus: [
		{ id: 0, label: 'Off' },
		{ id: 1, label: 'On' },
	],
	DOPulseStart: [
		{ id: 0, label: 'Stop' },
		{ id: 1, label: 'Start' },
	],
}

export const cmd = {
    char: {
        sep: '<br>',
        eq: '=',
        _: '_',
        quote: '"',
        ampersand:'&',
        query: '?',
        pad: '0',
    },
	get: {
		path: 'getParam.cgi?',
		date: 'DATE',
		time: 'TIME',
		ip: 'IP',
		location: 'LOC',
		description: 'DESC',
		firmware: 'FWR_V',
		model: 'MOD_NAME',
		serial: 'SN_NUM',
		macAddr: 'MAC_ADDR',
		di: {
			mode: 'DIMode_',
			status: 'DIStatus_',
			filter: 'DIFilter_',
			trigger: 'DITrigger_',
			countStart: 'DICntStart_',
			count: 'DICNT_',
		},
		do: {
			mode: 'DOMode_',
			status: 'DOStatus_',
			lowWidth: 'DOLowWidth_',
			highWidth: 'DOHighWidth_',
			pulseStart: 'DOPulseStart_',
		},
	},
	set: {
		path: 'setParam.cgi?',
		di: {
			mode: 'DIMode_',
			filter: 'DIFilter_',
			trigger: 'DITrigger_',
			countStart: 'DICntStart_',
		},
		do: {
			mode: 'DOMode_',
			status: 'DOStatus_',
			lowWidth: 'DOLowWidth_',
			highWidth: 'DOHighWidth_',
			pulseStart: 'DOPulseStart_',
		},
	},
}

export const response = {
	get: {
		date: 'DATE',
		time: 'TIME',
		ip: 'IP',
		location: 'LOC',
		description: 'DESC',
		firmware: 'FWR',
		model: 'MOD',
		serial: 'SN',
		macAddr: 'MAC',
		di: {
			mode: 'DIMode',
			status: 'DIStatus',
			filter: 'DIFilter',
			trigger: 'DITrigger',
			countStart: 'DICntStart',
			count: 'DICNT',
		},
		do: {
			mode: 'DOMode',
			status: 'DOStatus',
			lowWidth: 'DOLowWidth',
			highWidth: 'DOHighWidth',
			pulseStart: 'DOPulseStart',
		},
	},
}


export const actionOptions = {
	do: {
		id: 'do',
		type: 'multidropdown',
		label: 'DO',
		minSelection: 1,
		tooltip: `Select DOs to change`,
	},
	doStatus: {
		id: 'status',
		type: 'dropdown',
		label: 'Status',
		default: choices.DOStatus[0].id,
		choices: choices.DOStatus,
	},
	doMode: {
		id: 'mode',
		type: 'dropdown',
		label: 'Mode',
		default: choices.DOMode[0].id,
		choices: choices.DOMode,
	},
	doPulseStart: {
		id: 'mode',
		type: 'dropdown',
		label: 'Mode',
		default: choices.DOPulseStart[0].id,
		choices: choices.DOPulseStart,
	},
    doLowWidth: {
		id: 'lowWidth',
		type: 'textinput',
		label: 'Low Width (ms)',
		default: '100',
		useVariables: true,
	},
    doHighWidth: {
		id: 'highWidth',
		type: 'textinput',
		label: 'High Width (ms)',
		default: '100',
		useVariables: true,
	},
	di: {
		id: 'di',
		type: 'multidropdown',
		label: 'DI',
		minSelection: 1,
		tooltip: `Select DIs to change`,
	},
	diMode: {
		id: 'mode',
		type: 'dropdown',
		label: 'Mode',
		default: choices.DIMode[0].id,
		choices: choices.DIMode,
	},
	diTrigger: {
		id: 'mode',
		type: 'dropdown',
		label: 'Trigger',
		default: choices.DITrigger[0].id,
		choices: choices.DITrigger,
	},
	diCntStart: {
		id: 'mode',
		type: 'dropdown',
		label: 'Count',
		default: choices.DICntStart[0].id,
		choices: choices.DICntStart,
	},
	diFilter: {
		id: 'filter',
		type: 'textinput',
		label: 'Filter (ms)',
		default: '50',
		useVariables: true,
		tooltip: 'Return an number between 0.5 & 8480'
	},
}

export const feedbackOptions = {
	do: {
		id: 'do',
		type: 'dropdown',
		label: 'DO',
	},
	doStatus: {
		id: 'status',
		type: 'dropdown',
		label: 'Status',
		default: choices.DOStatus[0].id,
		choices: choices.DOStatus,
	},
	doMode: {
		id: 'mode',
		type: 'dropdown',
		label: 'Mode',
		default: choices.DOMode[0].id,
		choices: choices.DOMode,
	},
	doPulseStart: {
		id: 'mode',
		type: 'dropdown',
		label: 'Mode',
		default: choices.DOPulseStart[0].id,
		choices: choices.DOPulseStart,
	},
	di: {
		id: 'di',
		type: 'dropdown',
		label: 'DI',
	},
	diMode: {
		id: 'mode',
		type: 'dropdown',
		label: 'Mode',
		default: choices.DIMode[0].id,
		choices: choices.DIMode,
	},
	diTrigger: {
		id: 'mode',
		type: 'dropdown',
		label: 'Trigger',
		default: choices.DITrigger[0].id,
		choices: choices.DITrigger,
	},
	diCntStart: {
		id: 'mode',
		type: 'dropdown',
		label: 'Count',
		default: choices.DICntStart[0].id,
		choices: choices.DICntStart,
	},
}

export const colours = {
    black: combineRgb(0, 0, 0),
    white: combineRgb(255, 255, 255),
    red: combineRgb(255, 0, 0)
}

export const fb_styles = {
    defaultRed: {
        bgcolor: colours.red,
        color: colours.black,
    }
}