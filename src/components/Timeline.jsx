import { useMemo } from 'react';
import { education, experience } from '../data/portfolioData';

const Timeline = () => {
  // Parse date strings and create timeline items
  const parseDate = (dateStr) => {
    // Handle both regular dash (-) and en dash (–)
    let parts = dateStr.split(' – ');
    if (parts.length === 1) {
      parts = dateStr.split(' - ');
    }
    const start = parts[0].trim();
    const end = parts[1] ? parts[1].trim() : 'Present';
    
    const parseMonth = (monthYear) => {
      if (monthYear === 'Present') return new Date();
      const [month, year] = monthYear.split(' ');
      const months = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'June': 5, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      return new Date(parseInt(year), months[month] || 0);
    };
    
    return {
      start: parseMonth(start),
      end: parseMonth(end),
      original: dateStr
    };
  };

  // Combine and sort timeline items
  const timelineItems = useMemo(() => {
    const educationItems = education.map(item => ({
      ...item,
      type: 'education',
      dates: parseDate(item.duration),
      title: item.degree,
      subtitle: item.institution,
      details: item.grade,
      location: item.location,
      activities: item.activities
    }));

    const experienceItems = experience.map(item => ({
      ...item,
      type: 'experience',
      dates: parseDate(item.duration),
      title: item.position,
      subtitle: item.company,
      details: item.type,
      responsibilities: item.responsibilities
    }));

    const allItems = [...educationItems, ...experienceItems];
    
    // Sort by start date (most recent first)
    allItems.sort((a, b) => b.dates.start - a.dates.start);

    return allItems;
  }, []);

  const renderTimelineItem = (item, index) => {
    const isLeft = index % 2 === 0;
    const isEducation = item.type === 'education';

    return (
      <div key={`${item.type}-${item.id}`} className="relative flex items-start mb-12">
        {/* Content Card */}
        <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:order-2 md:pl-8'}`}>
          <div className="ml-12 md:ml-0 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Duration Badge */}
            <div className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
              isEducation 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
            }`}>
              {item.dates.original}
            </div>

            {/* Type Badge */}
            <div className="flex items-center space-x-2 mb-3">
              <div className={`w-2 h-2 rounded-full ${isEducation ? 'bg-blue-500' : 'bg-green-500'}`}></div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {item.type}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h3>

            {/* Subtitle */}
            <h4 className={`text-lg font-semibold mb-3 ${
              isEducation 
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-green-600 dark:text-green-400'
            }`}>
              {item.subtitle}
            </h4>

            {/* Details */}
            {isEducation ? (
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.details}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.location}
                </div>
                {item.activities && (
                  <div className="flex items-start text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 mt-0.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm">{item.activities}</span>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full mb-4">
                  {item.details}
                </span>
                <div className="space-y-2">
                  {item.responsibilities?.slice(0, 3).map((responsibility, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                  {item.responsibilities?.length > 3 && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 ml-5">
                      +{item.responsibilities.length - 3} more responsibilities
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Current indicator */}
            {item.dates.original.includes('Present') && (
              <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full mt-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Current
              </div>
            )}
          </div>
        </div>

        {/* Timeline Dot - Always centered */}
        <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-8 w-4 h-4 border-4 border-white dark:border-gray-800 rounded-full z-10 ${
          isEducation ? 'bg-blue-600' : 'bg-green-600'
        }`}></div>

        {/* Spacer for the other side */}
        <div className={`hidden md:block md:w-1/2 ${isLeft ? 'md:order-2' : ''}`}></div>
      </div>
    );
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Education and professional experience combined in one timeline
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-700"></div>

          {/* Timeline Items */}
          <div>
            {timelineItems.map(renderTimelineItem)}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {education.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Educational Milestones</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {experience.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Professional Experiences</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">40+</div>
            <div className="text-gray-600 dark:text-gray-300">Months of Learning</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">ML</div>
            <div className="text-gray-600 dark:text-gray-300">Specialization Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;