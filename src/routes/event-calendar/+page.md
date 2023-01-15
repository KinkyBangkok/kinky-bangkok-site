<script lang="ts">
  import Contact from '$lib/Contact.svelte';
</script>

<svelte:head>
	<title>Kinky Events in Bangkok</title>
	<meta name="description" content="All kinky events for this month in Bangkok including all other communities" />
</svelte:head>

# Kinky Events in Bangkok for January

Our calendar features events from all sources in Bangkok we could find.
It includes Thailand Kinks (TK), Thailand Misfits, Ropey Peeps and various events on Fetlife
<div class="responsive-events-table">

<table class="schedule">
    <thead>
        <tr>
            <th>Date</th>
            <th>Weekday</th>
            <th>Event</th>
            <th>Organizer</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="schedule-date">05 January 2023</td>
            <td class="schedule-day">Thursday</td>
            <td class="schedule-type">Casual Meetup</td>
            <td class="schedule-organiser">Thailand Kinks</td>
        </tr>
        <tr>
            <td class="schedule-date">06 January 2023</td>
            <td class="schedule-day">Friday</td>
            <td class="schedule-type">Monthly Munch</td>
            <td class="schedule-organiser">Thailand Kinks</td>
        </tr>
        <tr>
            <td class="schedule-date">07 January 2023</td>
            <td class="schedule-day">Saturday</td>
            <td class="schedule-type">Whip Tribe</td>
            <td class="schedule-organiser">Thailand Misfits</td>
        </tr>
        <tr>
            <td class="schedule-date">07 January 2023</td>
            <td class="schedule-day">Saturday</td>
            <td class="schedule-type">Sodom & Gomorrah</td>
            <td class="schedule-organiser">The Kink Empire</td>
        </tr>
        <tr>
            <td class="schedule-date">10 January 2023</td>
            <td class="schedule-day">Tuesday</td>
            <td class="schedule-type">Rope Jam</td>
            <td class="schedule-organiser">Ropey Peeps</td>
        </tr>
        <tr>
            <td class="schedule-date">12 January 2023</td>
            <td class="schedule-day">Thursday</td>
            <td class="schedule-type">Casual Meetup</td>
            <td class="schedule-organiser">Thailand Kinks</td>
        </tr>
        <tr>
            <td class="schedule-date">19 January 2023</td>  
            <td class="schedule-day">Thursday</td>
            <td class="schedule-type">Casual Meetup</td>
            <td class="schedule-organiser">Thailand Kinks</td>
        </tr>
        <tr>
            <td class="schedule-date">20 January 2023</td>
            <td class="schedule-day">Friday</td>
            <td class="schedule-type">Buffet Munch + Mini Workshop</td>
            <td class="schedule-organiser">Thailand Kinks</td>
        </tr>
        <tr>
            <td class="schedule-date">21 January 2023</td>
            <td class="schedule-day">Saturday</td>
            <td class="schedule-type">Tea Party</td>
            <td class="schedule-organiser">Thailand Misfits</td>
        </tr>
        <tr>
            <td class="schedule-date">22 January 2023</td>
            <td class="schedule-day">Sunday</td>
            <td class="schedule-type">Munch Lunch</td>
            <td class="schedule-organiser">Thailand Misfits</td>
        </tr>
        <tr>
            <td class="schedule-date">22 January 2023</td>
            <td class="schedule-day">Sunday</td>
            <td class="schedule-type">Grab Top</td>
            <td class="schedule-organiser">Thailand Misfits</td>
        </tr>
        <tr>
            <td class="schedule-date">24 January 2023</td>
            <td class="schedule-day">Tuesday</td>
            <td class="schedule-type">Rope Jam</td>
            <td class="schedule-organiser">Ropey Peeps</td>
        </tr>
        <tr>
            <td class="schedule-date">26 January 2023</td>
            <td class="schedule-day">Thursday</td>
            <td class="schedule-type">Casual Meetup</td>
            <td class="schedule-organiser">Thailand Kinks</td>
        </tr>
        <tr>
            <td class="schedule-date">28 January 2023</td>
            <td class="schedule-day">Sunday</td>
            <td class="schedule-type">Play Party</td>
            <td class="schedule-organiser">Thailand Misfits</td>
        </tr>
    </tbody>
</table>

</div>
To join you will just have to send us a message, and we will get back to you as soon as possible.



<Contact />



<style>
@media (max-width: 639px) {

    /* Tear table apart */
    .schedule thead {
        display: none;
    }

    .schedule tbody {
        display: block;
    }

    .schedule tr {
        display: block;
        padding: 16px 0;
    }

    .schedule td {
        display: inline;
        vertical-align: baseline;
    }


    /* Reassemble as cards */
    .schedule-date {
        display: inline;
        vertical-align: baseline;
        white-space: nowrap;
        padding: 0;
    }
        .schedule-date::after {
            content: ','
        }

    .schedule-day {
        display: inline;
        vertical-align: baseline;
        white-space: nowrap;
        padding: 0;
        font-style: italic;
        color: #666666;
    }

    .schedule-type {
        display: inline;
        padding: 0;
    }
        .schedule-type::before {
            content: '';
            display: block;
        }

    .schedule-organiser {
        display: inline;
        vertical-align: baseline;
        padding: 0;
    }
        .schedule-organiser::before {
            content: 'by';
            margin-left: 4px;
            margin-right: 8px;
            color: #666666;
        }

}
</style>
