import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import * as source from './src';

const filterFeature = loadFeature('./Features/filtering.feature');

defineFeature(filterFeature, test=> {
    test('Filtering by Cost', ({given, when, then }) => {
        let user;
    
        given ('I am a Rider looking to travel to UCLA at a max cost', () => {
            //needs to load ride offer page
            ridePage = source;
        });

        when ('I enter a max ride price', () => {
            //needs to actually filter the page
            user.filter(maxRidePrice);
        });

        then('the system will show me the rides under that price', () => {
            //needs to confirm the filtering works
            expect(user.viewRides).toBe(true);
        });
    });

    test('Filtering by Starting Location', ({given, when, then }) => {
        let user;
    
        given ('I want to view rides that are leaving the city I am in.', () => {
            user = new User();
        });

        when ('I enter my city', () => {
            user.filter(myCity);
        });

        then('the system will show me all the rides that are leaving the city I am in', () => {
            expect(user.viewRides).toBe(true);
        });
    });

    test('No Available Rides', ({given, when, then }) => {
        let user;
    
        given ('I want to view rides that are leaving the city I am in and there are no rides leaving the city I am in', () => {
            user = new User();
        });

        when ('I enter my city as the departure location', () => {
            user.filter(departureLocation);
        });

        then('the text saying saying there are no available rides that fit my filter criteria will appear where the feed is', () => {
            expect(user.viewRides).toBe(true);
        });
    });
    
});
